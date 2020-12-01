Vue
.createApp({})
.component('my-heavy', {
  setup() {
    //時間のかかる処理
    return new Promise((resolve) => {
      setTimeout(() =>{ resolve() }, 5000)
    })
    .then(() => {
      console.log('my-heavy initialized!!')
      return {}
    })
  },
  template: '<div>こんにちは、Suspense!</div>'
})
.mount('#app')