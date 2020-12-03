import { createStore } from 'vuex'

// a. ストアを生成
export default createStore({
  // b. ステートの定義
  state: {
    count: 0
  },
  // ゲッターを定義
  getters: {
    // ceiling(state) {
      // 丸めの桁数(10の位で丸め)
    //   const round = 10
    //   return Math.ceil(state.count / round)* round
    // }
    // 引数付きのゲッター
    ceiling(state) {
      return function (round) {
        return Math.ceil(state.count / round) * round
      }
    }
  },
  // c. ミューテーションの定義
  mutations: {
    plus(state) {
      state.count += 1
    },
    minus(state) {
      state.count -= 1
    },
  },
  // アクションの定義
  actions: {
  },
  // モジュールの定義
  modules: {
  }
})
