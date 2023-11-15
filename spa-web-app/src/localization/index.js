// index.js
import { createI18n } from 'vue-i18n';
import gb from './gb';
import vn from './vn';

const i18n = createI18n({
  legacy: false,
  locale: 'vn',
  messages: {
    gb, // Engalnd
    vn
  },
});

export default i18n;
