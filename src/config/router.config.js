const PageView = () => import('../layouts/PageView');
const BlankLayout = () => import('../layouts/BlankLayout');

export default [
  // 用户相关
  // 用户的登陆/注册/修改密码...
  {
    path: '/user',
    redirect: '/user/login',
    hidden: true,
    component: () => import('../layouts/UserLayout'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('../pages/user/Login'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../pages/user/Register'),
      },
    ],
  },
  {
    path: '/',
    redirect: '/dashboard/analysis',
    meta: { title: '首页' },
    component: () => import('../layouts/Layout'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/analysis',
        component: PageView,
        meta: { title: 'dashboard', keepAlive: true, icon: 'dashboard', permission: ['dashboard'] },
        children: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: () => import('../pages/dashboard/Analysis'),
            meta: { pageHeader: true, keepAlive: true, title: '分析页' },
          },
          {
            path: '/dashboard/monitor',
            name: 'monitor',
            component: () => import('../pages/dashboard/Monitor'),
            meta: { pageHeader: true, keepAlive: true, title: '监控页' },
          },
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            meta: { title: '工作台', keepAlive: true },
            component: () => import('../pages/dashboard/Analysis'),
          },
        ],
      },

      {
        path: '/form',
        name: 'form',
        component: BlankLayout,
        meta: { title: '表单页', icon: 'form' },
        children: [{
          path: '/form/basic-form',
          name: 'basic-form',
          meta: { title: '基础表单', keepAlive: true },
        }, {
          path: '/form/step-form',
          name: 'step-form',
          meta: { title: '分步表单', keepAlive: true },
        }, {
          path: '/form/advanced-form',
          name: 'advanced-form',
          meta: { title: '基础表单', keepAlive: true },
        }],
      },

      {
        path: '/list',
        name: 'list',
        component: BlankLayout,
        meta: { title: '列表页', keepAlive: true, icon: 'table' },
        children: [{
          path: '/list/table-list',
          name: 'table-list',
          component: PageView,
          meta: { title: '查询表格', keepAlive: true },
        }, {
          path: '/form/basic-list',
          name: 'basic-list',
          component: PageView,
          meta: { title: '标准列表', keepAlive: true },
        }, {
          path: '/form/card-list',
          name: 'card-list',
          component: PageView,
          meta: { title: '卡片列表', keepAlive: true },
        }, {
          path: '/form/search',
          name: 'search',
          component: PageView,
          meta: { title: '搜索列表', keepAlive: true },
          children: [
            {
              path: '/form/search/articles',
              name: 'articles',
              component: PageView,
              meta: { title: '搜索列表（文章）', keepAlive: true },
            }, {
              path: '/form/search/projects',
              name: 'projects',
              component: PageView,
              meta: { title: '搜索列表（项目）', keepAlive: true },
            }, {
              path: '/form/search/applications',
              name: 'applications',
              component: PageView,
              meta: { title: '搜索列表（应用）', keepAlive: true },
            },
          ],
        }],
      },

      {
        path: '/profile',
        name: 'profile',
        component: PageView,
        meta: { title: '详情页', icon: 'profile' },
        children: [{
          path: '/profile/basic',
          name: 'basic',
          component: PageView,
          meta: { title: '基础详情页', keepAlive: true },
        }, {
          path: '/profile/advanced',
          name: 'advanced',
          component: PageView,
          meta: { title: '高级详情页', keepAlive: true },
        }],
      },

      {
        path: '/result',
        name: 'result',
        component: PageView,
        meta: { title: '结果页', keepAlive: true, icon: 'check-circle-o' },
        children: [{
          path: '/result/success',
          name: 'success',
          component: PageView,
          meta: { title: '成功页', keepAlive: true },
        }, {
          path: '/result/fail',
          name: 'fail',
          component: PageView,
          meta: { title: '失败页', keepAlive: true },
        }],
      },
      {
        path: '/exception',
        name: 'exception',
        component: PageView,
        meta: { title: '异常页', icon: 'warning' },
        children: [{
          path: '/exception/403',
          name: '403',
          component: PageView,
          meta: { title: '403', keepAlive: true },
        }, {
          path: '/exception/404',
          name: '404',
          component: PageView,
          meta: { title: '404', keepAlive: true },
        }, {
          path: '/exception/500',
          name: '500',
          component: PageView,
          meta: { title: '500', keepAlive: true },
        }],
      },
      {
        path: '/center',
        name: 'center',
        component: PageView,
        meta: { title: '个人页', icon: 'user' },
        children: [{
          path: '/center/articles',
          name: 'articles',
          component: PageView,
          meta: { title: '个人中心', keepAlive: true },
        }, {
          path: '/center/settings',
          name: 'settings',
          component: PageView,
          meta: { title: '个人设置' },
        }],
      },
    ],
  },
];
