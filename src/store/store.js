function store (ctx) {
  console.log(ctx)
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
}

export default store
