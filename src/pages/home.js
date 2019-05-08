import html from 'choo/html'

// load components
import List from '../components/list'

function home (state) {
  return (
    html`
      <body>
        ${state.cache(List, 'list').render()}
      </body>
    `
  )
}

export default home
