Vue.component('project-details', {
    // camelCase in JavaScript
    props: ["model"],
    template: `
    <div class="details-wrapper">
    <h3>{{ model }}</h3>
    </div>
    `.toString()
})

Vue.component('button-counter', {
    props: ["name"],
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times. {{name}}</button>'
})

var app = new Vue({
    el: '#app',
    filters: {
        toUpperCase: function (input) {
            return input.toUpperCase();
        }
    },
    methods: function () {

    },
    computed: function () {

    },
    mounted: async function () {
        // document ready
        this.projects = (await axios.get('https://raw.githubusercontent.com/qpmadyqp/qpmadyqp-web/master/src/data.json')).data;
    },
    data: function () {
        return {
            itemDetails: null,
            message: "Hi",
            projects: []
        }

    }
})