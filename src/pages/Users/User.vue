<template>
  <a-card :bordered="false">
    <a-spin :spinning="loadding">
      <UserForm :user="{}" />
    </a-spin>
  </a-card>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import UserForm from './UserForm';
import userApi from '../../api/users';

@Component({
  name: 'User',
  components: { UserForm },
})
export default class User extends Vue {
  loadding = false;
  user = {};

  async mounted() {
    const { params } = this.$route;
    const id = Number(params.id);
    if (Number.isInteger(id)) {
      try {
        const { user } = await userApi.getUser(id);
        this.user = user;
      } catch (e) {
        this.user = {};
      }
    }
  }
}
</script>

<style lang='less' scoped>

</style>
