<template>
  <page-layout class="page-layout">
    <router-view/>
  </page-layout>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import PageLayout from './PageLayout';

@Component({
  name: 'PageView',
  components: {
    PageLayout,
  },
})
export default class PageView extends Vue {
}
</script>

<style lang='less' scoped>

</style>
