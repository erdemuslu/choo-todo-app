import html from 'choo/html'

// load components
import List from '../components/list'

function home (state, emit) {
  return (
    html`
      <div>
        ${state.cache(List, 'list').render()}
      </div>
    `
  )
}

export default home
