import {createApp} from 'vue'

import App from './App.vue'

import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChartSimple, faDatabase, faPenToSquare, faUser, faUserLock, faUserPen } from '@fortawesome/free-solid-svg-icons'

library.add(faDatabase)
library.add(faChartSimple)
library.add(faPenToSquare)
library.add(faUserLock)
library.add(faUserPen)
library.add(faUser)

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')