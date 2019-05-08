import choo from 'choo'

// load style
import './style/index.scss'

// load store
import store from './store/store'

// load pages
import home from './pages/home'

// define app
const app = choo()

// define store
app.use(store)

// define route
app.route('/', home)

// mount app
app.mount(document.getElementById('root'))
