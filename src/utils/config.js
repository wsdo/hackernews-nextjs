export const currentEnv = process.env.INIT_ENV;
export const isProd = process.env.INIT_ENV === 'prod';

const defualtUrl = 'https://api.shudong.wang';

const urlEnv = {
  prod: 'https://api.shudong.wang',
  dev: 'https://api.shudong.wang',
  test: 'https://api.shudong.wang',
};

export const baseUrl = urlEnv[currentEnv] || defualtUrl;
