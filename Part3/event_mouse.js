
// マウスの特定のボタンを検知する - マウス修飾子

Vue.createApp({
  methods: {
    onclick(e) {
      window.alert(
        `右クリックした座標: ${e.clientX},${e.clientY}`
      )
    }
  }
}).mount('#app')