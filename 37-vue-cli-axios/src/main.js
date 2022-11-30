import Vue from 'vue'
import App from './App.vue'
//Importazione di bootstrap 5.2
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* import specific icons */
import { faUserSecret, faFaceSmile, faUser } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library in camelcase */
library.add(faUserSecret, faFaceSmile, faUser)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
