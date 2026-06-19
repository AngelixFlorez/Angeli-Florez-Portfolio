import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SplineScene } from './ui/splite'
import ErrorBoundary from './ErrorBoundary'
import SocialDock from './SocialDock'
import { useLanguage } from '../context/LanguageContext'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ErrorBoundary fallback={<div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />}>
        <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />}>
          <div className="absolute inset-0">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </Suspense>
      </ErrorBoundary>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-transparent pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="h-full max-w-5xl mx-auto section-padding flex flex-col items-center justify-center text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="w-full font-extrabold mb-6 tracking-tighter py-6 leading-[1.3]"
          >
            <div className="flex justify-between items-center max-w-5xl mx-auto px-4">
              <motion.span
                className="text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-light to-accent-light inline-block pb-3"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundSize: '200% auto' }}
              >
                Angeli
              </motion.span>
              <motion.span
                className="text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-primary-light to-white inline-block pb-3"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundSize: '200% auto' }}
              >
                Florez
              </motion.span>
            </div>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mb-6 flex flex-col items-start gap-0 relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ scale: 1.05 }}
              className="pointer-events-auto -ml-8 -mb-3 -mt-6 z-10 relative"
            >
              <motion.div
                whileHover={{ rotate: -20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                className="-rotate-[18deg]"
              >
                <span className="inline-block px-4 py-1 text-[10px] md:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-primary-light bg-white/5 backdrop-blur-xl border border-primary/20 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  {t('hero', 'badge')}
                </span>
              </motion.div>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: 0.95, duration: 0.8 }}
              className="inline-block text-sm md:text-base lg:text-lg font-mono px-4 py-1.5 rounded-full bg-primary/10 text-primary-light border border-primary/20"
            >
              {t('hero', 'career')}
            </motion.span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-xl text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            {t('hero', 'tagline')}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 pointer-events-auto"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(168,85,247,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold tracking-wide overflow-hidden"
            >
              <motion.span
                className="relative z-10 flex items-center gap-2"
                animate={{ letterSpacing: ['normal', '0.05em', 'normal'] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {t('hero', 'explore')}
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%', skewX: -15 }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </motion.a>

            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 shadow-[0_0_20px_rgba(168,85,247,0.15)] pointer-events-auto"
            >
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(59,130,246,0.8)]"
              />
              <span className="text-xs font-mono text-text-secondary tracking-widest uppercase">
                {t('hero', 'opportunities')}
              </span>
            </motion.div>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(168,85,247,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold tracking-wide overflow-hidden"
            >
              <motion.span
                className="relative z-10"
                animate={{ letterSpacing: ['normal', '0.05em', 'normal'] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {t('hero', 'contact')}
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%', skewX: -15 }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </motion.a>
          </motion.div>

          <SocialDock />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-auto"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}
