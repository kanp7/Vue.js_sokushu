let app = Vue.createApp({})
// my-helloコンポーネントを定義&登録
app.component('my-hello', {
  template:'<div>こんにちは、コンポーネント！</div>'
})
//アプリを起動
app.mount('#app')