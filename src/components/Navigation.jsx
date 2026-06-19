import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const langLabels = { en: 'EN', es: 'ES', fr: 'FR' }

export default function Navigation() {
  const { lang, setLang, t } = useLanguage()
  const [activeSection, setActiveSection] = useState('home')
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const sections = [
    { id: 'home', label: t('nav', 'home') },
    { id: 'about', label: t('nav', 'about') },
    { id: 'skills', label: t('nav', 'skills') },
    { id: 'projects', label: t('nav', 'projects') },
    { id: 'education', label: t('nav', 'education') },
    { id: 'contact', label: t('nav', 'contact') },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(sections[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const cycleLang = () => {
    setLang(lang === 'en' ? 'es' : lang === 'es' ? 'fr' : 'en')
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div 
          className={`flex items-center justify-between mx-auto transition-all duration-500 ${
            scrolled 
              ? 'glass-card px-6 py-3 rounded-full' 
              : 'px-4'
          }`}
        >
          <motion.button
            onClick={() => scrollTo('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group flex items-center justify-center"
          >
            <motion.span
              className="text-xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent-light"
              whileHover={{ textShadow: '0 0 20px rgba(168,85,247,0.8)' }}
            >
              AF
            </motion.span>
          </motion.button>

          <div className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0, scale: 0.95 }}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  activeSection === section.id
                    ? 'text-white'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                <span className="relative z-10">{section.label}</span>
                {activeSection === section.id && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute inset-0 bg-white/10 border border-white/20 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
              </motion.button>
            ))}

            <motion.button
              onClick={cycleLang}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-3 relative px-3 py-1.5 text-xs font-mono font-semibold tracking-wider rounded-full border border-primary/30 text-primary-light bg-primary/10 hover:bg-primary/20 hover:border-primary/50 transition-all"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {langLabels[lang]}
              </span>
            </motion.button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <motion.button
              onClick={cycleLang}
              whileTap={{ scale: 0.95 }}
              className="px-2.5 py-1.5 text-xs font-mono font-semibold tracking-wider rounded-full border border-primary/30 text-primary-light bg-primary/10"
            >
              {langLabels[lang]}
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full bg-white/5 border border-white/10"
              aria-label="Menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-5 h-px bg-text-primary block transition-transform"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-px bg-text-primary block transition-opacity"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-5 h-px bg-text-primary block transition-transform"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-2xl flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {sections.map((section, i) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ delay: i * 0.08, type: 'spring', damping: 20 }}
                  whileHover={{ scale: 1.1, color: '#c084fc', textShadow: '0 0 20px rgba(168,85,247,0.5)' }}
                  onClick={() => scrollTo(section.id)}
                  className="text-4xl font-bold tracking-tight text-text-secondary hover:text-white transition-all"
                >
                  {section.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
