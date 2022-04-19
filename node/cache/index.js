const LRU = require('lru-cache');
const cacheConfig = require('../config').cacheConfig
const cache = new LRU({
  // max: 50000,
  maxAge: cacheConfig ? (cacheConfig.cacheTime || 1000 * 60 * 30) : 0
});
module.exports = cache;
 