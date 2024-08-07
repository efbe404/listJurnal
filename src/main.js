import { createApp } from 'vue'
import '@/style.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import {pinia} from '@/store/pinia'
import {useStore} from '@/store/modules'

// Components
import App from './App.vue'


const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
        .use(vuetify)
        .use(pinia)
        .provide('store',useStore())
        .mount('#app')
