
// Composiition APIの基本

Vue
.createApp({})
.component('my-counter',{
  // b.プロパティ / テンプレートを定義
  props: ['init'],
  // reactiveメソッドでは変数.プロパティ名でアクセス
  template: `<div>現在値は{{ state.current }}です！
    <input type="button" v-on:click="onclick" value="増加" /></div>`,
    // a.Composition APIによる定義
    setup(props) {
      // c.データオブジェクトの定義(dataオプションに相当)
      const state = Vue.reactive({
        current: props.init,
      })
      // d.イベントハンドラーの定義 (methodsオプションに相当)
      const onclick = function(){
        state.current++
      }
      // 定義内容をオブジェクト形式で返す
      return {
        state,onclick
      }
    }
})
.mount('#app')