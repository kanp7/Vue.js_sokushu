// <my-child>コンポーネントの定義
let MyChild = {
  template: '<div>MyChildです。</div>'
}

let MyHello = {
  template: `<div>こんにちは、コンポーネント！</div>
           <my-child></my-child>`,
  // <my-child>をローカル登録
  components: {
    'my-child': MyChild
  }
}

let OtherHello = {
  template: '<my-child></my-child>',
  // 下記の記述でコンポーネントをローカル定義しないと反映されない
  // components: {
  //   'my-child': MyChild
  // }
}

Vue.createApp({
  components: {
    'my-hello': MyHello,
    'other-hello': OtherHello
  }
}).mount('#app')