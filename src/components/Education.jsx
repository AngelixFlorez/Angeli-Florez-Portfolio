import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data'
import { useLanguage } from '../context/LanguageContext'

export default function Education() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="relative" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">{t('education', 'label')}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12"
        >
          {t('education', 'subtitle')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, type: 'spring' }}
              whileHover={{ y: -6, boxShadow: '0 10px 40px -10px rgba(168,85,247,0.2)' }}
              className="p-8 rounded-2xl glass-card border border-white/5 hover:border-primary/30 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-5 relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  style={{ backgroundColor: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)' }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <GraduationCap className="w-7 h-7 text-primary-light" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-text-primary group-hover:text-white transition-colors">{t('education', 'items.' + item.key + '.degree')}</h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent-light font-medium mb-2">{item.institution}</p>
                  <div className="flex items-center gap-3 text-xs text-text-muted font-mono">
                    <span>{item.year}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{t('education', 'items.' + item.key + '.focus')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
