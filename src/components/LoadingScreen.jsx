import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const loadingKeys = ['word1', 'word2', 'word3', 'word4']

export default function LoadingScreen({ onComplete }) {
  const { t } = useLanguage()
  const [progress, setProgress] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const [show, setShow] = useState(true)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 4 + 1, 100)
        return next
      })
    }, 80)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    setWordIndex(Math.min(Math.floor((progress / 100) * loadingKeys.length), loadingKeys.length - 1))
  }, [progress])

  useEffect(() => {
    if (progress >= 100) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      const t1 = setTimeout(() => setShow(false), 400)
      const t2 = setTimeout(onComplete, 900)
      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
      }
    }
  }, [progress, onComplete])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0f]"
        >
          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="flex items-center gap-3"
            >
              <span className="text-3xl font-bold font-mono text-[#6366f1]">AF</span>
              <span className="w-px h-8 bg-[#1e1e2e]" />
              <span className="text-sm text-[#6b6b80] font-mono tracking-wider uppercase">
                {t('loading', 'portfolio')}
              </span>
            </motion.div>

            <div className="w-48 h-1 bg-[#1a1a25] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4] rounded-full transition-all duration-200 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <motion.p
              key={wordIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-sm text-[#6b6b80] font-mono"
            >
              {t('loading', loadingKeys[wordIndex])}...
            </motion.p>

            <p className="text-xs text-[#6b6b80] font-mono">
              {Math.round(progress)}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
