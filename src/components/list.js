import html from 'choo/html'
import Component from 'choo/component'

// load components
import Item from './item'

class List extends Component {
  constructor (name, { all }, emit) {
    super(name)
    this.data = all
    this.emit = emit
    this.handleItem = this.handleItem.bind(this)
  }

  update () {
    return true
  }

  handleItem () {
    this.emit('updateItem')
  }

  createElement () {
    return html`
      <div class=${name}>
        <button type="button" onclick=${this.handleItem}>Change</button>
        <ul>
          ${this.data.map((item, index) => Item(item, index))}
        </ul>
      </div>
    `
  }
}

export default List
