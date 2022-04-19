const { Router } = require('express');
const { isPc } = require('../utils');
const { render } = require('../utils/render');
const { routeData } = require('./routeData');
const router = Router();

module.exports = function (app) {

  routeData.forEach(item => {
    router.get(item.path, (req, res) => {
      const ctx = {
        req,
        res
      };

      let newComponent = item.component;
      if (!newComponent) {
        const pcFlag = isPc(ctx.req.headers['user-agent']);
        newComponent = pcFlag ? item.componentPc : item.componentH5;
      }
      render({
        app,
        ctx,
        component: newComponent,
        data: item
      });
    });
  });
  return router;
};
