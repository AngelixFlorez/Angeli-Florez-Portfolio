import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Galaxy from './components/Galaxy'
import { LanguageProvider } from './context/LanguageContext'
import AppErrorBoundary from './components/AppErrorBoundary'
import LoadingScreen from './components/LoadingScreen'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function CursorFollower() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const handleLeave = () => setVisible(false)
    const handleEnter = () => setVisible(true)

    window.addEventListener('mousemove', handleMove, { passive: true })
    document.addEventListener('mouseleave', handleLeave)
    document.addEventListener('mouseenter', handleEnter)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('mouseenter', handleEnter)
    }
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, x: pos.x - 16, y: pos.y - 16 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 15,
            mass: 0.5,
          }}
          className="fixed pointer-events-none z-200 mix-blend-difference top-0 left-0"
          aria-hidden="true"
        >
          <div className="w-8 h-8 rounded-full bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const total = document.documentElement.scrollHeight - window.innerHeight
          setProgress(total > 0 ? window.scrollY / total : 0)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-3px z-100 origin-left"
      style={{ scaleX: progress }}
    >
      <div className="h-full bg-linear-to-r from-primary via-accent to-primary shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [showGalaxy, setShowGalaxy] = useState(false)

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShowGalaxy(true), 300)
      return () => clearTimeout(timer)
    }
  }, [loading])

  return (
    <AppErrorBoundary>
      <LanguageProvider>
        <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen"
          >
            <div className="fixed inset-0 pointer-events-none">
              {showGalaxy && (
                <Galaxy
                  density={0.6}
                  starSpeed={0.2}
                  glowIntensity={0.3}
                  hueShift={140}
                  saturation={0.2}
                  twinkleIntensity={0.4}
                  rotationSpeed={0.03}
                  mouseInteraction={false}
                  mouseRepulsion={false}
                  autoCenterRepulsion={0}
                />
              )}
            </div>
            <CursorFollower />
            <ScrollProgress />
            <Navigation />
            <main id="main-content">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
      </LanguageProvider>
    </AppErrorBoundary>
  )
}
