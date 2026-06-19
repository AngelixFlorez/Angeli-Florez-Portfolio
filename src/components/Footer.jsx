import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-surface-lighter/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="text-xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent-light hover:scale-105 transition-transform"
            >
              AF
            </button>
            <span className="w-px h-4 bg-white/20" />
            <span className="text-sm text-text-muted">
              &copy; {new Date().getFullYear()} {t('footer', 'rights')}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-white transition-colors group px-4 py-2 rounded-full border border-transparent hover:border-white/10 glass"
          >
            {t('footer', 'back')}
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
