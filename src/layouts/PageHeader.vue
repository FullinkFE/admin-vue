<template>
  <div class="page-header">
    <a-breadcrumb class="page-header-breadcrumb">
      <a-breadcrumb-item v-for="(item, index) in breadList" :key="index">
        <router-link
          v-if="item.name != name && index != 0"
          :to="{ path: item.path === '' ? '/' : item.path }"
        >{{ item.meta.title }}</router-link>
        <span v-else>{{ item.meta.title }}</span>
      </a-breadcrumb-item>
    </a-breadcrumb>


  </div>
</template>

<script>
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component({
  name: 'PageHeader',
})
export default class PageHeader extends Vue {
  breadList = [];
  name = '';

  @Watch('$route', { immediate: true, deep: true })
  getBreadcrumb() {
    this.breadList = [];
    this.name = this.$route.name;
    console.log(this.name)
    this.$route.matched.forEach((item) => {
      this.breadList.push(item);
    });

    console.log(this.breadList)
  }

  created() {
    this.getBreadcrumb();
  }
}
</script>

<style lang='less' scoped>
  .page-header{
    background: #fff;
    padding: 16px 32px 0;
    border-bottom: 1px solid #e8e8e8;
  }

  .page-header-breadcrumb{
    margin-bottom: 16px;
  }
</style>
