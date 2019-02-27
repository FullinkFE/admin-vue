<template>
  <div id="userLayout" class="user-layout-wrapper full-height">
    <a-row class="full-height">
      <a-col :lg="13" class="img-holder">
        <div class="info-holder">
          <img width="70%" :src="graphicSvg" alt="孚临风控中心商户端"/>
        </div>
      </a-col>

      <a-col :lg="11" class="form-holder">
        <div class="form-content">
          <div class="form-items">
            <div class="logo-wrap"><img :src="logoSvg" alt="" :style="{height: '80px'}"></div>
            <router-view/>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

import graphicSvg from '@/assets/svg/graphic.svg';

import logoSvg from '@/assets/svg/logo.svg';

@Component({
  name: 'UserLayout',
})
export default class UserLayout extends Vue {
  graphicSvg = graphicSvg;
  logoSvg = logoSvg;
}
</script>

<style lang='less' scoped>
  @import "~ant-design-vue/lib/style/themes/default.less";

  .user-layout-wrapper {
    height: 100%;

    .img-holder {
      padding: 60px;
      height: 100%;
      background-color: @primary-color;
    }

    .info-holder {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      color: #fff;
      text-align: center;
    }

    .title {
      margin-bottom: 30px;
      font-weight: 900;
      font-size: 25px;
      max-width: 378px;
      padding-right: 30px;
      color: #fff;
    }

    .desc {
      margin-bottom: 50px;
      font-size: 19px;
      font-weight: 300;
      max-width: 378px;
      line-height: 28px;
    }
    .logo-wrap {
      margin-bottom: 15px;
      text-align: center;
    }
    .form-holder {
      background-color: #fff;
      height: 100%;
    }

    .form-content {
      padding: 60px;
      min-height: 100%;
      width: 95%;
      margin: 0 auto;
    }

    .form-holder{
      padding-top: 60px;
    }


    @media (max-width: 768px) {
      .img-holder {
        display: none;
      }

      .form-content {
        padding: 0;
        width: 90%;
      }
    }

  }
</style>
