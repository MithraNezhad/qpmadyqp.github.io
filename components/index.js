const notFound = { template: "<p>Page not found</p>" };
const home = { template: "<p>home page</p>" };
const about = { template: "<p>about page</p>" };
const cv = { template: "<p>CV page</p>" };
const imprint = { template: "<p>imprint page</p>" };

const routes = {
  "/": home,
  "/about": about,
  "/cv": cv,
  "/imprint": imprint,
};

Vue.component("sidebar", {
  props: ["side"],
  template: "<li>{{ side.item }}</li>",
});

var app = new Vue({
  el: "#app",
  data: {
    sitename: "Mehrdad Hozhabri Nezhad",
    header: {
      filters : ['year','field','category']
    },
    currentRoute: window.location.pathname,
    sidebar: [
      { item: "about" },
      { item: "curriculum vitae" },
      { item: "imprint" },
    ],
    currentFilter: "year",
    data: [],
  },
  mounted: function () {
    axios.get("components/data.json").then((res) => {
      this.data = res.data;
    });
  },
  computed: {
    showcase: function () {
      const aggregate = (key) => {
        const groups = _.groupBy(this.data, (p) => p.projectInfo[key]);
        const keys = Object.keys(groups);
        return keys.map((p) => {
          return { name: p, items: groups[p] };
        });
      };

      const aggregated = {};

      this.header.filters.forEach(
        (p) => (aggregated[p] = aggregate(p))
      );

      return aggregated;
    },
  },
  // computed: {
  //   ViewComponent () {
  //     return routes[this.currentRoute] || NotFound
  //   }
  // },
  // render (h) { return h(this.ViewComponent) }
});
