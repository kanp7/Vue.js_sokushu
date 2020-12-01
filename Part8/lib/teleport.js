Vue
.createApp({})
// my-teleportコンポーネントを定義
.component('my-teleport', {
  // a. テンプレート内で移動させるテキストを定義
  template: `<div>こんにちは、Teleport!!</div>
  <teleport to="#result">
    my-helloからテレポートされたテキスト
  </teleport>
  <div>こんにちは、Teleport!!</div>
  `
})
.mount('#app')