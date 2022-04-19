const port = 6020;

module.exports = {
  apps: [
    {
      name: 'app',
      script: './server.js',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '4G',
      instances: 2,
      env_production: {
        PORT: 80,
        NODE_ENV: 'production',
        INIT_ENV: 'prod',
        APP_NAME: 'app',
        ENABLE_NODE_LOG: 'YES',
        NODE_LOG_DIR: '/tmp'
      },
      env_dev: {
        PORT: port,
        NODE_ENV: 'dev',
        INIT_ENV: 'dev',
        APP_NAME: 'app',
        ENABLE_NODE_LOG: 'YES',
        NODE_LOG_DIR: '/tmp'
      },
      env_prod: {
        PORT: 80,
        NODE_ENV: 'production',
        INIT_ENV: 'prod',
        APP_NAME: 'app',
        ENABLE_NODE_LOG: 'YES',
        NODE_LOG_DIR: '/tmp'
      },
      env_local: {
        PORT: port,
        NODE_ENV: 'local',
        INIT_ENV: 'local',
        APP_NAME: 'app',
        ENABLE_NODE_LOG: 'YES',
        NODE_LOG_DIR: '/tmp'
      },
      env_pre: {
        PORT: port,
        NODE_ENV: 'production',
        INIT_ENV: 'pre',
        APP_NAME: 'app',
        ENABLE_NODE_LOG: 'YES',
        NODE_LOG_DIR: '/tmp'
      },
      env_test: {
        PORT: port,
        NODE_ENV: 'dev',
        INIT_ENV: 'test',
        APP_NAME: 'app',
        ENABLE_NODE_LOG: 'YES',
        NODE_LOG_DIR: '/tmp'
      }
    }
  ]
};
