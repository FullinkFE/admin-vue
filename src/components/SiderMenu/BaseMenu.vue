<template>
  <a-menu
    :style="{ padding: '16px 0', width:'100%'}"
    :defaultSelectedKeys="['1']"
    :defaultOpenKeys="['sub1']"
    :inlineCollapsed="true"
    :openKeys="openKeys"
    :selectedKeys="selectedKeys"
    @click="setCurrentPaths"
    @openChange="onpenChange"
    theme="dark"
    mode="inline"
    >

    <a-sub-menu :key="menu.key" v-for="menu in menus">
      <span slot="title">
        <a-icon :type="menu.meta && menu.meta.icon" />
        <span>{{menu.meta && menu.meta.title}}</span>
      </span>
      <a-menu-item :key="m.name" v-for="m in menu.children">
        <router-link :to="m.path">{{m.meta && m.meta.title}}</router-link>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
import { Vue, Component, Inject, Watch } from 'vue-property-decorator';
import { observer } from 'mobx-vue';
import menus from '../../config/router.config';

@observer
@Component({
  props: {
    siderCollapsed: Boolean,
  },
})
export default class BaseMenu extends Vue {
  @Inject() store;
  selectedKeys = [];
  openKeys = [];
  cachedOpenKeys = [];
  rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6'];

  get menus() {
    return menus.find(item => item.path === '/').children;
  }

  // 监测左侧栏展开显示的一个标识符
  // 在关闭状态下讲过openkeys 设置为空数组
  // 以解决在左侧栏收缩的时候二级菜单会展示在页面上
  @Watch('siderCollapsed')
  onSideeCollapsedChange(val) {
    if (val) {
      this.cachedOpenKeys = this.openKeys;
      this.openKeys = [];
    } else {
      this.openKeys = this.cachedOpenKeys;
    }
  }

  @Watch('$route', { immediate: true, deep: true })
  updateMenu() {
    const routes = this.$route.matched.concat();

    if (routes.length >= 4 && this.$route.meta.hidden) {
      routes.pop();
      this.selectedKeys = [routes[2].path];
    } else {
      this.selectedKeys = [routes.pop().path];
    }

    const openKeys = [];
  }

  // 设置当前选中的那一个路由
  setCurrentPaths({ key }) {
    this.selectedKeys = [key];
  }

  // 获取到当前打开的那一层
  getMenuSelectKeys() {
    const { name } = this.$route;
    const names = [...name.split('.')];
    return {
      openKeys: [names.pop()],
      selectedKeys: [name],
    };
  }

  onpenChange(openkeys) {
    const latestOpenkey = openkeys.find(key => this.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenkey) === -1) {
      this.openKeys = openkeys;
    } else {
      this.openKeys = latestOpenkey ? [latestOpenkey] : [];
    }
  }
  mounted() {
    const { openKeys, selectedKeys } = this.getMenuSelectKeys();
    this.openKeys = openKeys || [];
    this.selectedKeys = selectedKeys;
  }
}
</script>

<style scoped>

</style>
