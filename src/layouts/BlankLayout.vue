<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'BlankLayout',
})
export default class BlankLayout extends Vue {
}
</script>

<style lang='less' scoped>

</style>
