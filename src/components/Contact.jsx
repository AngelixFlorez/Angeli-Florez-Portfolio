import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, CheckCircle, Loader2, MapPin } from 'lucide-react'
import { personalInfo } from '../data'
import SocialDock from './SocialDock'
import { useLanguage } from '../context/LanguageContext'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const formRef = useRef(null)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setTimeout(() => {
        setStatus('idle')
        setFormState({ name: '', email: '', message: '' })
      }, 3000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" className="relative" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">{t('contact', 'label')}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              {t('contact', 'title')}
              <span className="gradient-text"> {t('contact', 'highlight')}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary leading-relaxed mb-8"
            >
              {t('contact', 'subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              <div className="flex items-center gap-3 text-sm text-text-secondary">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <span>{personalInfo.location}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-sm font-semibold text-text-secondary mb-4">{t('contact', 'findMe')}</h3>
              <SocialDock />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {['name', 'email', 'message'].map((field) => (
                <div key={field} className="relative group">
                  <label className="block text-sm font-medium text-text-secondary mb-2 capitalize group-focus-within:text-primary transition-colors">
                    {t('contact', field)}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      name={field}
                      value={formState[field]}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder={`${t('contact', 'yourMessage')}`}
                      className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none glass"
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formState[field]}
                      onChange={handleChange}
                      required
                      placeholder={`${field === 'name' ? t('contact', 'yourName') : field === 'email' ? t('contact', 'yourEmail') : t('contact', 'yourMessage')}`}
                      className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all glass"
                    />
                  )}
                </div>
              ))}

              <motion.button
                type="submit"
                disabled={status !== 'idle'}
                whileHover={status === 'idle' ? { scale: 1.02, boxShadow: '0 0 20px rgba(139,92,246,0.3)' } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium transition-all ${
                  status === 'success'
                    ? 'bg-accent text-white'
                    : status === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-primary text-white hover:bg-primary-light'
                }`}
              >
                {status === 'sending' && (
                  <motion.span className="flex items-center gap-2" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                    <Loader2 className="w-5 h-5 animate-spin" /> {t('contact', 'sending')}
                  </motion.span>
                )}
                {status === 'success' && (
                  <motion.span
                    className="flex items-center gap-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring' }}
                  >
                    <CheckCircle className="w-5 h-5" /> {t('contact', 'success')}
                  </motion.span>
                )}
                {status === 'error' && (
                  <span className="flex items-center gap-2">
                    {t('contact', 'error')}
                  </span>
                )}
                {status === 'idle' && (
                  <>
                    <Send className="w-5 h-5" /> {t('contact', 'send')}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
