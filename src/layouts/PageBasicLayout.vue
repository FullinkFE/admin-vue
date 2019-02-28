<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-header style="background: #fff; padding: 0">
      <div class="gloab-layout-header">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="toggleCollapse"
        />

        <div class="gloab-layout-header-right">
          <span class="gloab-layout-header-right-action gloab-layout-header-right-action-search">
            <a-icon type="search" />
          </span>


          <a-tooltip placement="bottom" >
            <template slot="title">
              <span>使用文档</span>
            </template>
            <a href="/" class="gloab-layout-header-right-action">
            <a-icon type="question-circle" /></a>
          </a-tooltip>

          <!--通知-->
          <span :class="['gloab-layout-header-right-action']">
            <global-header-notices>
              <span style="height: 64px; display: inline-block">
              <a-badge class="gloab-layout-header-right-action-badge" :count="99">
                <a-icon class="gloab-layout-header-right-action-notices-icon" type="bell"/>
              </a-badge>
                </span>
            </global-header-notices>
          </span>


          <a-dropdown>
            <span class="gloab-layout-header-right-action">
              <span>
                <img width="24" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="avatar">
              </span>
              <span>Serati Ma</span>
            </span>
            <a-menu slot="overlay" class="user-tools">
              <a-menu-item key="0">
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/"><a-icon type="user" />个人中心</a>
              </a-menu-item>
              <a-menu-item key="1">
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/"><a-icon type="setting" />个人设置</a>
              </a-menu-item>
              <a-menu-item key="2">
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/"><a-icon type="close-circle" />触发报错</a>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="3" disabled>
                <a href=""><a-icon type="logout" />退出登陆</a>
              </a-menu-item>
            </a-menu>

          </a-dropdown>

          <span class="gloab-layout-header-right-action">
            <a-icon type="global"/>
          </span>
        </div>
      </div>
    </a-layout-header>
    <a-layout-content>
      <div class="basic-layout">
        <router-view/>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import GlobalHeaderNotices from '../components/globalHeader/GlobalHeaderNotices';

@Component({
  name: 'PageBasicLayout',
  components: {
    GlobalHeaderNotices,
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
})
export default class PageBasicLayout extends Vue {
  toggleCollapse() {
    this.$emit('update:collapsed', !this.collapsed);
  }
}
</script>

<style lang='less' scoped>
  @import "../assets/less/var.less";

  .basic-layout{
    margin: 24px;
  }

  .gloab-layout-header{
    position: relative;
    height: 64px;
    padding: 0;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    overflow: hidden;

    .trigger{
      font-size: 18px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color .3s;
    }

    .gloab-layout-header-right{
      float: right;
      height: 100%;
      overflow: hidden;

      .gloab-layout-header-right-action{
        padding: 0 12px;
        display: inline-block;
        height: 100%;
        transition: .3s all;
        cursor: pointer;

        @{deep} > i{
          color: rgba(0,0,0,.65);
          vertical-align: middle;
        }

        &:hover, &.opened{
          background-color: rgba(0,0,0,.025);
        }
      }

    }
  }

  .gloab-layout-header-right-action-search{
    font-size: 16px;
  }

  .gloab-layout-header-right-action-badge{
    font-size: 16px;
  }

  .gloab-layout-header-right-action-notices-icon{
    padding: 4px;
    vertical-align: middle;
  }

  .user-tools{
    @{deep} .anticon{
      margin-right: 8px;
      min-width: 12px;
    }
  }
</style>
