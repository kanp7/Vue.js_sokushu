Vue
.createApp({
  data() {
    return {
      color: 'Purple'
    }
  }
})

// a.プラグインを登録
.use(MyUtil, { border: true })
.mount('#app')
