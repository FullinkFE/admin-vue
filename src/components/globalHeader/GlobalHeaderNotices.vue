<template>
  <a-dropdown
    v-model="visible"
    placement="topLeft"
    :trigger="['click']">
    <slot></slot>
    <div slot="overlay" @click="handleMenuClick" class="notice-index-popover-inner-content">
      <div style="width: 340px">
        <a-tabs defaultActiveKey="1">
          <a-tab-pane tab="通知(2)" key="1">
            <a-list itemLayout="horizontal" :dataSource="data" class="notices-list-item">
              <div class="components-notice-index-notice-list-clear" slot="footer">清空通知</div>
              <a-list-item slot="renderItem" slot-scope="item, index">
                <a-list-item-meta :description="item.desc" >
                  <a href="https://ant.design" slot="title">{{item.title}}</a>
                  <a-avatar slot="avatar" :src="item.avatar" />
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-tab-pane>
          <a-tab-pane tab="通知(2)" key="2">
            <a-list itemLayout="horizontal" :dataSource="data" class="notices-list-item">
              <div class="components-notice-index-notice-list-clear" slot="footer">清空通知</div>
              <a-list-item slot="renderItem" slot-scope="item, index">
                <a-list-item-meta :description="item.desc" >
                  <a href="https://ant.design" slot="title">{{item.title}}</a>
                  <a-avatar slot="avatar" :src="item.avatar" />
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-tab-pane>
          <a-tab-pane tab="通知(2)" key="3">
            <a-list itemLayout="horizontal" :dataSource="data" class="notices-list-item">
              <div class="components-notice-index-notice-list-clear" slot="footer">清空通知</div>
              <a-list-item slot="renderItem" slot-scope="item, index">
                <a-list-item-meta :description="item.desc" >
                  <a href="https://ant.design" slot="title">{{item.title}}</a>
                  <a-avatar slot="avatar" :src="item.avatar" />
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </a-dropdown>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

import dingding from '../../assets/images/dingding.png';
import message from '../../assets/images/message.png';
import plus from '../../assets/images/plus.png';
import star from '../../assets/images/star.png';

@Component({
  name: 'GlobalHeaderNotices',
})
export default class GlobalHeaderNotices extends Vue {
  visible = false;
  data = [
    {
      avatar: message,
      title: '您收到14份简历',
      desc: 'a years ago',
    },
    {
      avatar: dingding,
      title: 'Ant Design Title 2',
      desc: 'a years ago',
    },
    {
      avatar: plus,
      title: 'Ant Design Title 3',
      desc: 'a years ago',
    },
    {
      avatar: star,
      title: 'Ant Design Title 4',
      desc: 'a years ago',
    },
  ];

  handleMenuClick(e) {
    if (e.key === '3') {
      this.visible = false;
    }
  }
}

</script>

<style scoped lang="less">
  @import "../../assets/less/var.less";

  .notice-index-popover-inner-content{
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,.15);

    @{deep} .ant-tabs-nav-scroll{
      text-align: center;
    }
  }
  .notices-list-item @{deep} .ant-list-item{
    padding-left: 24px;
    padding-right: 24px;
  }

  .global-header-index-action{
    font-size: 18px;

    .bell{
      vertical-align: middle;
    }
  }
  .components-notice-index-notice-list-clear{
    cursor: pointer;
    text-align: center;
    color:  #1890ff;
  }
</style>
