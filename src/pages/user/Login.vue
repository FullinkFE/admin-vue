<template>
  <a-form
      id="login"
      :autoFormCreate="(form)=>{this.form = form}"
      @submit.prevent="login">
      <template>
        <a-tabs
          class="tab"
          :defaultActiveKey="activeTab"
          :animated="false"
          @change="setActiveTab">
          <a-tab-pane tab="账户密码登录" key="userName">
            <a-form-item
              fieldDecoratorId="email"
              :fieldDecoratorOptions="{rules: rules.email}">
              <a-input size="large" placeholder="E-mail Address">
                <a-icon slot="prefix" type='user'/>
              </a-input>
            </a-form-item>

            <a-form-item
              fieldDecoratorId="password"
              :fieldDecoratorOptions="{rules: rules.password}">
              <a-input size="large" type='password' placeholder="Password">
                <a-icon slot="prefix" type='lock'/>
              </a-input>
            </a-form-item>
          </a-tab-pane>

          <a-tab-pane tab="手机号登陆" key="phone">
            <a-form-item
              fieldDecoratorId="phone"
              :fieldDecoratorOptions="{rules: rules.phone}">
              <a-input size="large" placeholder="Mobile Number">
                <a-icon slot="prefix" type='mobile'/>
              </a-input>
            </a-form-item>

            <a-form-item>
              <a-row :gutter="8">
                <a-col :span="16">
                  <a-form-item
                    fieldDecoratorId="captcha"
                    :fieldDecoratorOptions="{rules: rules.captcha}">
                    <a-input size="large" placeholder="captch-btn">
                      <a-icon slot="prefix" type='mail'/>
                    </a-input>
                  </a-form-item>
                </a-col>
                <a-col :span="8">
                  <a-button
                    class="btn-block"
                    @click="getCaptch"
                    :disabled="!!count"
                    size="large">{{count ? `${count}s`:"获取验证码"}}</a-button>
                </a-col>
              </a-row>
            </a-form-item>
          </a-tab-pane>
        </a-tabs>
        <a-form-item
          fieldDecoratorId="remember"
          :fieldDecoratorOptions="{
            valuePropName: 'checked',
            initialValue: true}">
          <a-checkbox>自动登录</a-checkbox>
          <a class="login-form-forgot" href="">忘记密码</a>
        </a-form-item>
        <a-form-item>
          <a-button
            size="large" htmlType='submit' type="primary" class="btn-block">登录</a-button>
        </a-form-item>
      </template>
    </a-form>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

import validator from '@/services/validator';

@Component({
  name: 'Login',
})
export default class Login extends Vue {
    activeTab = 'userName';
    count = 0;
    rules = {
      phone: validator.phone,
      captcha: [validator.require('请输入验证码!')],
      email: validator.email,
      password: [validator.require('请输入您的密码!')],
    };

    login() {
      const file = {
        userName: ['email', 'password'],
        phone: ['phone', 'captcha'],
      };
      this.form.validateFields(file[this.activeTab], (err) => {
        if (!err) {
          this.$router.push('/');
        }
      });
    }

    setActiveTab(tab) {
      this.activeTab = tab;
    }

    getCaptch() {
      this.form.validateFields(['phone'], (err) => {
        if (!err) {
          this.count = 120;
          const fn = () => {
            this.count -= 1;
            if (this.count > 0) {
              setTimeout(fn, 1000);
            }
          };
          fn();
        }
      });
    }
}
</script>

<style lang='less' scoped>
  @import "~ant-design-vue/lib/style/themes/default.less";
  @deep: ~'>>>';

  #login {
    .login-form-forgot {
      float: right;
      color: @primary-color;
    }
  }

  .tab @{deep} {
    .ant-tabs-bar{
      border-bottom: 0;
      margin-bottom: 24px;
      text-align: center;
    }

    .ant-input-affix-wrapper .anticon{
      color: rgba(0,0,0,.25);
    }
  }

</style>
