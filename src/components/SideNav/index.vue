<template>
  <div class="side_nav">
    <div
      v-for="(item,index) in list"
      :key="index"
    >
      <h5>{{item.name}}</h5>
      <ul>
        <li
          v-for="items in item.children"
          :key="items.path"
        >
          <router-link :to="`/componentEle${items.path}`">{{ items.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'SideNav'
})
export default class SideNav extends Vue {
  @Prop(Array) list!: any[]
}
</script>

<style lang='scss' scoped>
.side_nav {
  width: 100%;
  height: 100%;
}
</style>
