const choo = require('choo')

// load store
const store = require('./store/store')

// load pages
const home = require('./pages/home')

// define app
const app = choo()

// define store
app.use(store)

// define route
app.route('/', home)

// mount app
app.mount('body')
