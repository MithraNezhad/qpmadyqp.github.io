

Vue.component('cards', {
  props: ['card'],
  template: `
    <div>
    <img src="./assets/altimg.svg" alt="no image">
    <p>{{ card.title }}</p>
</div>`
})

Vue.component('sidebar', {
  props: ['side'],
  template:'<li>{{ side.item }}</li>'
    
})

Vue.component('categories', {
  props: ['categorie'],
  template:'<div>{{ categorie.name }}</div>'
    
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
    ],
    categories: [
      { name: 'Interaction Design' },
      { name: 'Industrial Design' },
      { name: 'Computer Graphics' },
      { name: 'Hobby Projekte' },
      { name: 'Fotografie' },
    ]
  }
})



