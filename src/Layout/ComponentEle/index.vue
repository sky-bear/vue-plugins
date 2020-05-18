<template>
  <div class="component_ele">
    <div class="left">
      <SideNav :list="leftNavList" />
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import SideNav from '@/components/SideNav/index.vue'
import { leftNavList } from './utils'

@Component({
  name: 'ComponentEle',
  components: {
    SideNav
  }
})
export default class ComponentEle extends Vue {
  private leftNavList = Object.freeze(leftNavList)
}
</script>

<style lang='scss' scoped>
.component_ele {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  .left {
    width: 250px;
    height: 100%;
  }
  .right {
    flex: 1;
  }
}
</style>
