import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
    ceiling(state) {
      const round = 10;
      return Math.ceil(state.count / round) * round;
    }   
  },
  mutations: {
    update(state, payload) {
      state.count += payload.step;
    }
  },
  actions: {
    // 3000ミリ秒後にupdateミューテーションを実行
    asyncUpdate(context, payload) {
      setTimeout(() => {
        context.commit('update', { step: payload.step });
      }, 3000);
    }
  },
  modules: {
  }
})
