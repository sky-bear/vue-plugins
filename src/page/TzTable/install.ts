import TablePagination from "./index.vue"
export default {
  install(Vue: any) {
    Vue.component('VETable', TablePagination)
  }
}