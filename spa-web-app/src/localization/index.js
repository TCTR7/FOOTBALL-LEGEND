// index.js
import { createI18n } from 'vue-i18n';
import en from './en';
import vn from './vn';

const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
    vn
  },
});

export default i18n;
