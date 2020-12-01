Vue
.createApp({})
.component('my-hello', {
  props: ['yourName'],
  // テンプレートに<slot>要素を埋め込む
  // 呼び出しもとのコンテンツが<slot></slot>に埋め込まれ、なにもない場合は権兵衛が表示される
  template: '<div>こんにちは、<slot>権兵衛</slot></div>'
}).mount('#app')