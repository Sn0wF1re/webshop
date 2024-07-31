import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import App from './App.vue'
import router from './router'

import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

library.add(faCartShopping)
library.add(faUser)


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    config: {
        brand: {
            primary: '#e47e30',
            secondary: '#5d2a42',
            accent: '#9C27B0',
      
            dark: '#1d1d1d',
            'dark-page': '#121212',
      
            positive: '#30b84f',
            negative: '#e0021c',
            info: '#31CCEC',
            warning: '#ffc524'
        }
    }
})

app.mount('#app')
