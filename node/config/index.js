const nextConfig =  require('../../next.config')

const cacheConfig = nextConfig.openCache || {
    cacheTime: 3000000,
    cacheRoutes: []
}
module.exports = {
    cacheConfig
}



