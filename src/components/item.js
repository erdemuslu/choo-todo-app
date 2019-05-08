import html from 'choo/html'

function Item ({ title, completed }, id) {
  return (
    html`
      <li id=${id}>
        <h4>${title}</h4>
        <input type="checkbox" checked=${completed} />
      </li>
    `
  )
}

export default Item
