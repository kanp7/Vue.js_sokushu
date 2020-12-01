
// コードの共通化
// setupメソッドの中で共通化できる要素を関数として外部化し、カウンターの初期値は引数としてinitを受け取る

function CounterLogic(init) {
  // データオブジェクトの定義
  const state = Vue.reactive({
    current: init,
  })
  // 算出プロパティの定義
  const rounded = Vue.computed(function() {
    return Math.round(state.current /10 ) * 10
  })
  // メソッド（イベントハンドラー）の定義
  const onclick = function() {
    state.current++
  }
  // 一旦束ねた内容を返す
  return {
    state, rounded, onclick
  }
}