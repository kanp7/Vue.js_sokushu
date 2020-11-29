let app = new Vue({
  el: '#app',
  data: {
    list: ['melon','orange','peach']
  },
  methods: {
    //ボタンクリック時に2番目の要素を変更
    onclick() {
      this.list[1] = 'strawberry'
      // バージョン2の場合は下記で正しく動作する
      // Vue.set(this.list, 1, 'strawberry')
      // this.list.splice(1,1,'strawberry')
    }
  }
})