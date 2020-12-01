Vue
.createApp({})
.component('my-counter',{
  props: ['init'],
  template: `<div>現在値は {{ state.current }} (約{{ rounded }})です！
    <input type="button" v-on:click="onclick" value="増加"></div>`,
  setup(props) {
    return {
      // 共通コードを戻り値に組み込む
      ...CounterLogic(props.init)
    }
  }
})
.mount('#app')