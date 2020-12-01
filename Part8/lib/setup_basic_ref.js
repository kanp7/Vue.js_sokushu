Vue
.createApp({})
.component('my-counter', {
  props: ['init'],
  // b.変数を参照
  // refメソッドで定義された変数は、変数名でアクセス
  template: `<div>現在値は{{ current }}です！
  <input type="button" v-on:click="onclick" value="増加" /></div>`,
  setup(props) {
    // a.変数を定義
    const current = Vue.ref(props.init)
    const onclick = function() {
      current.value++
    }
    return {
      current, onclick
    }
  }
})
.mount('#app')