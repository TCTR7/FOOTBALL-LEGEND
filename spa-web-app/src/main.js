
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import DefaultLayout from './layouts/Default.vue'
import SystemConstants from './constants/SystemConstants'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import CountryFlag from 'vue-country-flag-next'

import i18n from './localization'

library.add(
    faCaretDown
)

createApp(App)
    .component(SystemConstants.DEFAULT_LAYOUT, DefaultLayout)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('country-flag-icon', CountryFlag)
    .use(router)
    .use(i18n)
    .mount('#app')
