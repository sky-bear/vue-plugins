<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Main'
})
export default class Main extends Vue {}
</script>

<style lang='scss' scoped>
.main {
  height: calc(100% - 100px);
  width: 100%;
}
</style>
