const PageView = () => import('../layouts/PageView');

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
            path: 'analysis',
            name: 'analysis',
            component: () => import('../pages/dashboard/Analysis'),
            meta: { pageHeader: true, keepAlive: true, title: '分析页' },
          },
          {
            path: 'workplace',
            name: 'workplace',
            meta: { title: '工作台', keepAlive: true },
            component: () => import('../pages/dashboard/Analysis'),
          },
        ],
      },

      {
        path: '/form',
        name: 'form',
        component: PageView,
        meta: { title: '表单页', icon: 'form' },
        children: [{
          path: 'form/basic-form',
          name: 'basic-form',
          meta: { title: '基础表单', keepAlive: true },
        }, {
          path: 'step-form',
          name: 'step-form',
          meta: { title: '分步表单', keepAlive: true },
        }, {
          path: 'advanced-form',
          name: 'advanced-form',
          meta: { title: '基础表单', keepAlive: true },
        }],
      },

      {
        path: '/list',
        name: 'list',
        component: PageView,
        meta: { title: '列表页', keepAlive: true, icon: 'table' },
        children: [{
          path: 'table-list',
          name: 'table-list',
          component: PageView,
          meta: { title: '查询表格', keepAlive: true },
        }, {
          path: 'basic-list',
          name: 'basic-list',
          component: PageView,
          meta: { title: '标准列表', keepAlive: true },
        }, {
          path: 'card-list',
          name: 'card-list',
          component: PageView,
          meta: { title: '卡片列表', keepAlive: true },
        }, {
          path: 'search',
          name: 'search',
          component: PageView,
          meta: { title: '高级详情页', keepAlive: true },
          children: [
            {
              path: 'articles',
              name: 'articles',
              component: PageView,
              meta: { title: '搜索列表（文章）', keepAlive: true },
            }, {
              path: 'projects',
              name: 'projects',
              component: PageView,
              meta: { title: '搜索列表（项目）', keepAlive: true },
            }, {
              path: 'applications',
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
          path: 'basic',
          name: 'basic',
          component: PageView,
          meta: { title: '基础详情页', keepAlive: true },
        }, {
          path: 'advanced',
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
          path: 'success',
          name: 'success',
          component: PageView,
          meta: { title: '成功页', keepAlive: true },
        }, {
          path: 'fail',
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
          path: '403',
          name: '403',
          component: PageView,
          meta: { title: '403', keepAlive: true },
        }, {
          path: '404',
          name: '404',
          component: PageView,
          meta: { title: '404', keepAlive: true },
        }, {
          path: '500',
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
          path: 'articles',
          name: 'articles',
          component: PageView,
          meta: { title: '个人中心', keepAlive: true },
        }, {
          path: '/settings',
          name: 'settings',
          component: PageView,
          meta: { title: '个人设置' },
        }],
      },
    ],
  },
];
