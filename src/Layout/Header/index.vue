<template>
  <div class="header">
    <div>
      <img
        alt="Vue logo"
        src="~@/assets/images/icon.png"
      />
      <div class="right">
        <span
          v-for="item in rightNav"
          :key="item.path"
        >
          <router-link :to="item.path">{{ item.name }}</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { rightNav } from './utils'

@Component({
  name: 'Header'
})
export default class Header extends Vue {
  private rightNav = Object.freeze(rightNav)
}
</script>

<style lang="scss" scoped>
.header {
  height: 100px;
  width: 100%;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    img {
      width: 80px;
      height: 80px;
    }
    .right {
      span {
        padding: 0 10px;
        height: 80px;
        display: inline-block;
        a {
          color: #bad6f4;
          height: 100%;
          display: inline-block;
          line-height: 80px;
          box-sizing: border-box;
          position: relative;
        }
      }
    }
  }
}
</style>
