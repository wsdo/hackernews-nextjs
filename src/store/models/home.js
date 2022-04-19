import { getHomeData } from '../../services/commonService';

export default {
  state: {
    user: {},
    demoName: 'hello word',
  },
  reducers: {
    updateState(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    async getUser() {
      const res = await getHomeData();
      this.updateState({ user: res.data });
    },
  },
};
