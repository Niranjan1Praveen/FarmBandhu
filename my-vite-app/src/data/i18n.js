import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import headerEn from '../locales/en/header.json'
import headerHi from '../locales/hi/header.json'

import heroEn from '../locales/en/hero.json'
import heroHi from '../locales/hi/hero.json'

import testimonialEn from '../locales/en/testimonial.json'
import testimonialHi from '../locales/hi/testimonial.json'

import aboutUsEn from '../locales/en/aboutUs.json'
import aboutUsHi from '../locales/hi/aboutUs.json'

import footerEn from '../locales/en/footer.json'
import footerHi from '../locales/hi/footer.json'

import contactUsEn from '../locales/en/contactUs.json'
import contactUsHi from '../locales/hi/contactUs.json'

import cropPriceEn from '../locales/en/cropPrice.json'
import cropPriceHi from '../locales/hi/cropPrice.json'

import featuredPostEn from '../locales/en/featuredPost.json'
import featuredPostHi from '../locales/hi/featuredPost.json'

import homeChartsEn from '../locales/en/homeCharts.json'
import homeChartsHi from '../locales/hi/homeCharts.json'

import loginEn from '../locales/en/login.json'
import loginHi from '../locales/hi/login.json'

import registerEn from '../locales/en/register.json'
import registerHi from '../locales/hi/register.json'

import cropYieldEn from '../locales/en/cropYield.json'
import cropYieldHi from '../locales/hi/cropYield.json'

import cropRecommEn from '../locales/en/cropRecommendation.json'
import cropRecommHi from '../locales/hi/cropRecommendation.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        header: headerEn,
        hero: heroEn,
        testimonial: testimonialEn,
        aboutUs: aboutUsEn,
        footer: footerEn,
        contactUs: contactUsEn,
        cropPrice: cropPriceEn,
        featuredPost: featuredPostEn,
        homeCharts: homeChartsEn,
        login: loginEn,
        register: registerEn,
        cropYield: cropYieldEn,
        cropRecomm: cropRecommEn,
      },
      hi: {
        header: headerHi,
        hero: heroHi,
        testimonial: testimonialHi,
        aboutUs: aboutUsHi,
        footer: footerHi,
        contactUs: contactUsHi,
        cropPrice: cropPriceHi,
        featuredPost: featuredPostHi,
        homeCharts: homeChartsHi,
        login: loginHi,
        register: registerHi,
        cropYield: cropYieldHi,
        cropRecomm: cropRecommHi,
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    ns: ['header'],
    defaultNS: 'header',
  });

export default i18n;
