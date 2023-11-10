
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import DefaultLayout from './layouts/Default.vue'
import SystemConstants from './constants/SystemConstants'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

library.add(
    faCaretDown
)

createApp(App)
    .component(SystemConstants.DEFAULT_LAYOUT, DefaultLayout)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
