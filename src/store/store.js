function store (ctx, emitter) {
  // define store variables
  ctx.all = [
    {
      title: 'Example todo item 1',
      completed: true
    },
    {
      title: 'Example todo item 2',
      completed: false
    }
  ]

  emitter.on('DOMContentLoaded', () => {
    console.log('mounted on the DOM')
  })

  emitter.on('updateItem', () => {
    ctx.all[0].title = 'New Item'

    emitter.emit('render')
  })
}

export default store
