import { createStore } from 'vuex'

// a. ストアを生成
export default createStore({
  // b. ステートの定義
  state: {
    count: 0
  },
  // ゲッターを定義
  getters: {
    // 引数付きのゲッター
    ceiling(state) {
      return function (round) {
        return Math.ceil(state.count / round) * round
      }
    }
  },
  // c. ミューテーションの定義
  mutations: {
    update(state,payload) {
      state.count += payload.step
    }
  },
  // アクションの定義
  actions: {
  },
  // モジュールの定義
  modules: {
  }
})
