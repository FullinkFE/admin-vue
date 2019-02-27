<template>
  <div :style="!$route.meta.pageHeader ? 'margin: -24px -24px 0px;' : null">

    <page-header v-if="!$route.meta.pageHeader"></page-header>

    <div :class="!$route.meta.pageHeader ? 'content':''">
      <div :class="['page-header-index-wide']">
        <slot></slot>
      </div>
    </div>
    antd-pro-components-page-header-wrapper-grid-content-main
  </div>

</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import PageHeader from './PageHeader';

@Component({
  name: 'PageLayout',
  components: { PageHeader },
})
export default class PageLayout extends Vue {
}
</script>

<style lang='less' scoped>
  .content {
    margin: 24px 24px 0;
    .link {
      margin-top: 16px;
      &:not(:empty) {
        margin-bottom: 16px;
      }
      a {
        margin-right: 32px;
        height: 24px;
        line-height: 24px;
        display: inline-block;
        i {
          font-size: 24px;
          margin-right: 8px;
          vertical-align: middle;
        }
        span {
          height: 24px;
          line-height: 24px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
  .page-menu-search {
    text-align: center;
    margin-bottom: 16px;
  }
  .page-menu-tabs {
    margin-top: 48px;
  }
</style>
