import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index/index', title: '真光浸信会'},
    { path: '/index', component: '@/pages/index/index', title: '真光浸信会'},
    { path: 'video', component: '@/pages/video/[video].js', title: '录像'},
    { path: 'resource', component: '@/pages/resource/worship.js', title: '主日崇拜'},
    { path: 'dailyBread', component: '@/pages/resource/dailyBread.js', title: '每日靈修'},
    { path: 'ministry', component: '@/pages/ministry/ministry.js', title: '教会事工'},
    { path: 'englishBibleGroup', component: '@/pages/ministry/englishBibleStudy.js', title: '英語查經小組'},
    { path: 'adult', component: '@/pages/ministry/adult.js', title: '成人主日學'},
    { path: 'pray', component: '@/pages/ministry/pray.js', title: '禱告小組'},
    { path: 'fellowship', component: '@/pages/ministry/fellowship.js', title: '團契小組'},
    { path: 'kid', component: '@/pages/ministry/kid.js', title: '兒童事工'},
    { path: 'testimony', component: '@/pages/testimony/testimony.js', title: '活动见证'},
    { path: 'new', component: '@/pages/new/new.js', title: '新人指南'},
    { path: 'about', component: '@/pages/about/about.js', title: '关于真光'},
    { path: 'constitution', component: '@/pages/about/constitution.js', title: '教會會章'},
    { path: 'faith', component: '@/pages/about/faith.js', title: '信仰宣言'},
    { path: 'knowus', component: '@/pages/about/knowus.js', title: '認識我們'},
    { path: 'support', component: '@/pages/about/support.js', title: '奉獻支持'}
  ],
  fastRefresh: {},
  favicon: 'favicon.ico',
  theme: {
    '@primary-color': '#fa8c16', // 全局主色
    '@link-color': '#1890ff', // 链接色
    '@success-color': '#52c41a', // 成功色
    '@warning-color': '#faad14', // 警告色
    '@error-color': '#f5222d', // 错误色
    '@font-size-base': '18px', // 主字号
    '@heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
    '@text-color': 'rgba(0, 0, 0, 0.75)', // 主文本色
    '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // 次文本色
    '@disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色
    '@border-radius-base': '2px', // 组件/浮层圆角
    '@border-color-base': '#d9d9d9', // 边框色
    '@box-shadow-base': '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)', // 浮层阴影
    '@font-family': "Source Han Sans CN"
  },
  proxy: {
    "/uploads" : {
      "target": "https://sftlbc-awhl9.ondigitalocean.app",
      "changeOrigin": true,
      "pathRewrite": { "^/": ''}
    },
    "/api" : {
      "target": "https://sftlbc-awhl9.ondigitalocean.app/",
      "changeOrigin": true,
      "pathRewrite": { "^/": ''}
    }
  }
});
