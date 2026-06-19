import { useRef, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { Code2, Sparkles, Brain, Palette } from 'lucide-react'

export default function About() {
  const { t } = useLanguage()
  const specialties = useMemo(() => [
    { icon: Code2, label: t('about', 'sp1Label'), desc: t('about', 'sp1Desc'), color: '#8b5cf6' },
    { icon: Sparkles, label: t('about', 'sp2Label'), desc: t('about', 'sp2Desc'), color: '#a78bfa' },
    { icon: Brain, label: t('about', 'sp3Label'), desc: t('about', 'sp3Desc'), color: '#3b82f6' },
    { icon: Palette, label: t('about', 'sp4Label'), desc: t('about', 'sp4Desc'), color: '#60a5fa' },
  ], [t])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <motion.span
            className="text-xs font-mono text-primary tracking-widest uppercase inline-block"
            animate={isInView ? { letterSpacing: ['0.2em', '0.4em', '0.2em'] } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {t('about', 'label')}
          </motion.span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight"
            >
              {t('about', 'heading1')}
              <span className="gradient-text"> {t('about', 'heading2')}</span>
            </motion.h2>

            <div className="space-y-4">
              {['para1', 'para2', 'para3'].map((key, i) => (
                <motion.p
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="text-text-secondary leading-relaxed"
                >
                  {t('about', key)}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, type: 'spring' }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(168,85,247,0.1)' }}
              className="mt-10 p-8 rounded-2xl glass-card relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.p
                className="text-base text-text-muted italic leading-relaxed relative z-10"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                "{t('about', 'philosophy')}"
              </motion.p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
            {specialties.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.15, type: 'spring', stiffness: 100 }}
                  whileHover={{ y: -8, scale: 1.05, boxShadow: `0 10px 40px -10px ${item.color}50` }}
                  className="group p-8 rounded-2xl glass-card hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 shadow-lg relative z-10"
                    style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}
                    whileHover={{ backgroundColor: `${item.color}30`, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </motion.div>
                  <h3 className="font-bold mb-2 text-base text-text-primary group-hover:text-white transition-colors relative z-10">{item.label}</h3>
                  <p className="text-sm text-text-muted group-hover:text-text-secondary transition-colors relative z-10">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
