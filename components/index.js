

Vue.component('cards', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['card'],
  template: `
    <div>
    <img src="./assets/altimg.svg" alt="no image">
    <p>{{ card.title }}</p>
</div>`
})

Vue.component('sidebar', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['side'],
  template:'<li>{{ side.item }}</li>'
    
})

Vue.component('category', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['cat'],
  template:'<div>{{ cat.name }}</div>'
    
})


var app = new Vue({
  el: '#app',
  data: {
    sitename: 'Mehrdad Hozhabri Nezhad',
    sidebar: [
      { item: 'about' },
      { item: 'curriculum vitae' },
      { item: 'imprint' }
    ],
    groceryList: [
      { id: 0, title: 'Vegetables' },
      { id: 1, title: 'Cheese' },
      { id: 3, title: 'project1' },
      { id: 4, title: 'project2' },
      { id: 5, title: 'project3' }
    ]
  }
})



