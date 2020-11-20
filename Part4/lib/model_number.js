
// 入力値を数値としてバインドする - number修飾子

Vue.createApp({
  data() {
    return {
      time: 0
    }
  },
  methods: {
    //入力値を小数点第1位に丸めたものをログ表示
    onchange() {
      console.log(this.time.toFixed(1))
    }
  }
}).mount('#app')