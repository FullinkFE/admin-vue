<template>
    <div class="basic-layout">
      <router-view/>
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'PageBasicLayout',
})
export default class PageBasicLayout extends Vue {
}
</script>

<style lang='less' scoped>
  .basic-layout{
    margin: 24px;
  }
</style>
