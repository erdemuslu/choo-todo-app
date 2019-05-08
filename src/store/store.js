function store (state, emitter) {
  // define store variables
  state.all = [
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
