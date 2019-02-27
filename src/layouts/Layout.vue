<template>
  <a-layout class="full-height" id="components-layout-demo-responsive">
    <SideBar/>
    <a-layout>
      <page-basic-layout>
        <router-view></router-view>
      </page-basic-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import SideBar from '../components/SiderMenu';
import PageBasicLayout from './PageBasicLayout';

@Component({
  name: 'Layout',
  components: {
    SideBar,
    PageBasicLayout,
  },
})
export default class Layout extends Vue {
}
</script>

<style lang='less' scoped>

</style>
