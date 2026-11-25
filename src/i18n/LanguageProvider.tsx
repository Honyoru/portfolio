'use client'

import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import { dictionary, type Lang } from './dictionary'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue>({ lang: 'en', setLang: () => {} })

const STORAGE_KEY = 'lang'

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>('en')

  // saved choice first, otherwise the browser language
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'fr') setLangState(saved)
    else if (navigator.language.toLowerCase().startsWith('fr')) setLangState('fr')
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export const useLang = () => useContext(LanguageContext)

/** Current language + its dictionary */
export const useT = () => {
  const { lang, setLang } = useLang()
  return { lang, setLang, t: dictionary[lang] }
}
