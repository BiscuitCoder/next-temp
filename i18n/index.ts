import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import zhCN from './zh-CN.json';
import zhTW from './zh-TW.json';

export const I18N_CACHE_KEY = 'i18nextLng'

export const langMap = {
  "🇺🇸 English": 'en',
  "🇭🇰 繁體中文": 'zh-TW',
  "🇨🇳 简体中文": 'zh-CN'
}

const i18nConfig = {
  // detection: {
  //   order: ['querystring', 'localStorage', 'cookie', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
  //   caches: ['localStorage', 'cookie']
  // },
  resources: {
    en: { translation: en },
    'zh-TW': { translation: zhTW },
    'zh-CN': { translation: zhCN }
  },
  fallbackLng: 'en'
}

i18n
  // .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(i18nConfig)

const supportLanguage = new Set(Object.keys(i18nConfig.resources))

export const changeLang = async (lang: string) => {
  if (!supportLanguage.has(lang)) return
  i18n.changeLanguage(lang)
  localStorage.setItem(I18N_CACHE_KEY, lang)
}

export default i18n
