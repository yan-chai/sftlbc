import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index/index', title: '真光浸信会'},
    { path: '/index', component: '@/pages/index/index', title: '真光浸信会'},
    { path: 'video', component: '@/pages/video/[video].js', title: '录像'},
    { path: 'worship', component: '@/pages/worship/worship.js', title: '主日崇拜'},
    { path: 'ministry', component: '@/pages/ministry/ministry.js', title: '教会事工'},
    { path: 'englishBibleGroup', component: '@/pages/ministry/englishBibleStudy.js', title: '英語查經小組'},
    { path: 'testimony', component: '@/pages/testimony/testimony.js', title: '活动见证'},
    { path: 'new', component: '@/pages/new/new.js', title: '新人指南'},
    { path: 'about', component: '@/pages/about/about.js', title: '关于真光'},
    { path: 'constitution', component: '@/pages/about/constitution.js', title: '教會會章'}
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
  },
  proxy: {
    "/uploads" : {
      "target": "https://sftlbc-3nphj.ondigitalocean.app",
      "changeOrigin": true,
      "pathRewrite": { "^/": ''}
    },
    "/api" : {
      "target": "https://sftlbc-3nphj.ondigitalocean.app",
      "changeOrigin": true,
      "pathRewrite": { "^/": ''}
    }
  }
});
