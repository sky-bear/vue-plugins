<template>
  <div id="app">
    <div class="bg">
      <Header />
      <Main />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './Layout/Header/index.vue'
import Main from './Layout/Main/index.vue'

@Component({
  components: {
    Header,
    Main
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './styles/base.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fff;
  height: 100%;
  width: 100%;
  .bg {
    width: 70%;
    height: 100%;
    min-width: 1100px;
    margin: 0 auto;
  }
}
</style>
