
// プロパティ値はコンポーネント内部で変更しない

Vue
.createApp({})
.component('my-counter',{
  props: [ 'init' ],
  template: `<div>現在地は {{ current }}です！
    <input type="button" v-on:click="onclick" value="増加" /></div>`,
    // 内部プロパティを定義
    data() {
      return {
        current: this.init
      }
    },
    methods: {
      // ボタンクリック時にcurrentプロパティをインクリメント
      onclick() {
        this.current++
      }
    }
  })
  .mount('#app')
