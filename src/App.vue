<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { Vue, Component, Provide } from 'vue-property-decorator';
import store from './store';

@Component
export default class App extends Vue {
  @Provide() store = store
}
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>

