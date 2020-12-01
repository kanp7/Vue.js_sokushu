Vue.component('my-hello', {
  // Vue.js2では下記のようにdivの階層を増やす必要があった
  template: `<div>
    <div>こんにちは、コンポーネント！</div>
    <div>こんにちは、コンポーネント２！</div>
  </div>`
})

new Vue({
  el:'#app'
})