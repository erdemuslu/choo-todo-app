import html from 'choo/html'
import Component from 'choo/component'

// load components
import Item from './item'

class List extends Component {
  constructor (name, { all }) {
    super(name)
    this.data = all
  }

  update () {
    return false
  }

  createElement () {
    return html`
      <div class=${name}>
        <div class="list">List component</div>
        <ul>
          ${this.data.map((item, index) => Item(item, index))}
        </ul>
      </div>
    `
  }
}

export default List
