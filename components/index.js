

Vue.component('cards', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['card'],
  template: `
    <div>
    <img src="" alt="no image">
    <p>{{ card.text }}</p>
</div>`
})


var app6 = new Vue({
  el: '#app',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'project2' }
    ]
  }
})


