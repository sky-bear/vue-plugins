<template>
  <div>
    <SideNav :list="leftNavList" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import SideNav from '@/components/SideNav/index.vue'
import { leftNavList } from './utils'

@Component({
  name: 'ComponentEleLeftNav',
  components: {
    SideNav
  }
})
export default class ComponentEleLeftNav extends Vue {
  private leftNavList = Object.freeze(leftNavList)
}
</script>

<style lang='scss' scoped></style>
