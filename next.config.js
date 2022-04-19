const withPlugins = require('next-compose-plugins');
// https://www.npmjs.com/package/next-plugin-antd-less
const withAntdLess = require('next-plugin-antd-less');

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPlugins([
  [withAntdLess, {
    // antd 变量配置：https://ant.design/docs/react/customize-theme-cn#Ant-Design-%E7%9A%84%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F
    modifyVars: { '@primary-color': '#025eff' },
    // optional
    lessVarsFilePath: './src/styles/variables.less',
    // optional
    lessVarsFilePathAppendToEndOfContent: false,
    // optional https://github.com/webpack-contrib/css-loader#object
    cssLoaderOptions: {},
  }],
], nextConfig);
