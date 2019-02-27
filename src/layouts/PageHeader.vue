<template>
  <div class="page-header">
    <div>
      <a-breadcrumb class="page-header-breadcrumb">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
        <a-breadcrumb-item>An Application</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'PageHeader',
})
export default class PageHeader extends Vue {
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
