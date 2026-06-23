/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const { i18n, t: i18nT } = useTranslation()

  const t = useCallback((section, key) => {
    return i18nT(`${section}.${key}`)
  }, [i18nT])

  const toggleLang = useCallback(() => {
    const order = ['en', 'es', 'fr']
    const current = i18n.language
    const idx = order.indexOf(current)
    i18n.changeLanguage(order[(idx + 1) % order.length])
  }, [i18n])

  return (
    <LanguageContext.Provider value={{ lang: i18n.language, setLang: i18n.changeLanguage, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
