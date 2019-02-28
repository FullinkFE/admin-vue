<template>
  <a-menu
    :style="{ padding: '16px 0', width:'100%'}"
    :defaultSelectedKeys="[]"
    :defaultOpenKeys="[]"
    :inlineCollapsed="collapsed"
    :openKeys="openKeys"
    :selectedKeys="selectedKeys"
    @openChange="onpenChange"
    theme="dark"
    :mode="mode"
    >
    <a-sub-menu :key="menu.path" v-for="menu in menus">
      <span slot="title">
        <a-icon :type="menu.meta && menu.meta.icon" />
        <span>{{menu.meta && menu.meta.title}}</span>
      </span>

      <template class="1bc" v-for="m in menu.children">
        <a-menu-item :key="m.path" v-if="!m.children">
          <router-link :to="m.path">{{m.meta && m.meta.title}}</router-link>
        </a-menu-item>

        <a-sub-menu :key="m.path" v-if="m.children" :title="m.meta && m.meta.title">
          <a-menu-item :key="m1.path" v-for="m1 in m.children">
            <router-link :to="m1.path">{{m1.meta && m1.meta.title}}</router-link>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-sub-menu>
  </a-menu>
</template>

<script>
import { Vue, Component, Watch } from 'vue-property-decorator';
import { observer } from 'mobx-vue';
import menus from '../../config/router.config';

@observer
@Component({
  name: 'BaseMenu',
  props: {
    collapsed: Boolean,
  },
})
export default class BaseMenu extends Vue {
  selectedKeys = [];
  openKeys = [];
  cachedOpenKeys = [];
  mode = 'inline';

  get menus() {
    return menus.find(item => item.path === '/').children;
  }

  // 监测左侧栏展开显示的一个标识符
  // 在关闭状态下讲过openkeys 设置为空数组
  // 以解决在左侧栏收缩的时候二级菜单会展示在页面上
  @Watch('collapsed')
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
    if (this.mode === 'inline') {
      routes.forEach((item) => {
        openKeys.push(item.path);
      });
    }

    if (this.collapsed) {
      this.cachedOpenKeys = openKeys;
    } else {
      this.openKeys = openKeys;
    }
  }

  onpenChange(openkeys) {
    this.openKeys = openkeys;
  }
}
</script>

<style scoped>

</style>
