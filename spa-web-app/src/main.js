
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import DefaultLayout from './layouts/Default.vue'
import SystemConstants from './constants/SystemConstants'
import { FontAwesomeIcon, library } from './fontawesome/index'
import CountryFlag from 'vue-country-flag-next'
import i18n from './localization'
import store from './store'
import VueUploadComponent from 'vue-upload-component'

const app = createApp(App);
app.config.globalProperties.$fontAwesome = { library };
app.component(SystemConstants.DEFAULT_LAYOUT, DefaultLayout)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('country-flag-icon', CountryFlag)
    .component('file-upload', VueUploadComponent)
    .use(router)
    .use(i18n)
    .use(store)
    .mount('#app')
