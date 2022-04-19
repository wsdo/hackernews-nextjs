// 参考配置：https://www.npmjs.com/package/http-proxy-middleware
/** @type {import('http-proxy-middleware/dist/types').Options} */
const proxyTable = {
  '/node': {
    target: 'https://api.shudong.wang',
    changeOrigin: true
  }
};

module.exports = proxyTable;
