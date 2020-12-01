Vue
.createApp({})
.component('my-counter', {
  props: [ 'init' ],
  template: `<div>現在地は {{ state.current }} (約{{ rounded }}) です！
    <input type="button" v-on:click="onclick" value="増加" /></div>`,
    setup(props) {
      const state = Vue.reactive({
        current: props.init,
      })
      const onclick = function() {
        state.current++
      }
      // 算出プロパティroundedの定義
      const rounded = Vue.computed(function() {
        return Math.round(state.current / 10) * 10
      })
      // コンポーネント定義をまとめる
      return {
        state,rounded,onclick
      }
    }
})
.mount('#app')
