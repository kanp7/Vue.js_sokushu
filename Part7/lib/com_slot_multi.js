Vue
.createApp({})
.component('my-hello', {
  props: ['yourName'],
  // 名前付きのスロットを準備
  template: `<div>
    <header>
      <slot name="header"></slot>
    </header>
    <div>
      <slot></slot>
    </div>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>`
})
.mount('#app')