import Vue from 'vue'
import Router from 'vue-router'
import ComponentOrigin from '@/Layout/ComponentOrigin/index.vue'
import Introduce from '@/Layout/Introduce/index.vue'
import ComponentEle from '@/Layout/ComponentEle/index.vue'
import routeEle from './componentEle/index'
import { routerConfig } from './router.config'


Vue.use(Router)

const LOAD_DOCS_MAP = {
  componentEle: path => import(`@/docs/ele${path}.md`)
}

const loadDocs = function (groupName, path) {
  return LOAD_DOCS_MAP[groupName](path);
};

const addRoute = groupName => {
  const list = routerConfig[groupName].filter(item => item.groups)
  const routes: any = []

  list.forEach(item => {
    if (item.groups && item.groups.length) {
      console.log(item, 1)
      item.groups.forEach(items => {
        if (items.list && items.list.length) {
          items.list.forEach(route => {
            const component = loadDocs(groupName, route.path)

            routes.push({
              path: route.path.slice(1),
              meta: {
                title: route.title || route.name,
                description: route.description,
              },
              name: 'component-' + route.path.slice(1),
              component: component.default || component
            })
          })
        }

      })
    }
  })

  console.log(routes)
  return routes
}

const routes = [
  { path: '/', redirect: '/introduce' },
  {
    path: '/introduce',
    name: 'introduce',
    component: Introduce
  },
  {
    path: '/componentOrigin',
    name: 'componentOrigin',
    component: ComponentOrigin
  },
  {
    path: '/componentEle',
    name: 'componentEle',
    component: ComponentEle,
    children: addRoute('componentEle')
    // children: routeEle

  },
]


const router = new Router({
  routes,
  mode: 'hash',
  linkActiveClass: 'router-link-active'
})


export default router