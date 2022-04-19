/*
 * @Author: starkwang
 * @Contact me: https://shudong.wang/about
 * @Date: 2019-11-21 15:25:24
 * @LastEditors: starkwang
 * @LastEditTime: 2019-11-27 18:30:56
 * @Description: file content
 */
const express = require('express');
const path = require('path');
const proxyTable = require('./config/proxy.js');
const { createProxyMiddleware } = require('http-proxy-middleware');

function start(app) {
  const router = require('./routes')(app);
  const server = express();
  const Cache = require('./cache');
  
  // 配置静态资源
  const staticPath = '../public';
  server.use(express.static(path.join(__dirname, staticPath)));

  const handle = app.getRequestHandler();
  const port = parseInt(process.env.PORT, 10) || 3000
  
  app.prepare().then(() => {
    // 心跳检测，统一使用 /check
    server.get('/check', (req, res) => {
      res.send({
        code: 1,
        msg: 'success'
      });
    });

    // 清理页面缓存
    server.post('/clearCache', (req, res) => {
      const { url, platform = 'pc' } = req.query;

      if (!url) {
        res.send({
          code: 0,
          msg: '请输入合法的URL'
        });
        return;
      }

      const clearUrl = `${platform}:${decodeURIComponent(url)}`;
      console.log('clearUrl', clearUrl);
      Cache.has(clearUrl) && Cache.del(clearUrl);

      res.send({
        code: 1,
        msg: 'success',
        data: Cache.keys()
      });
    });

    // 加载自定义路由
    server.use('', router);

    // 代理配置
    Object.keys(proxyTable).forEach(context => {
      let options = proxyTable[context];
      if (typeof options === 'string') {
        options = { target: options };
      }
      server.get('(.*)', createProxyMiddleware(options.filter || context, options));
    });

    // 走 next 路由
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
}

module.exports = start
