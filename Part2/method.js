Vue.createApp({
  data() {
    return {
      current: new Date().toLocaleString()
    }
  },
  computed: {
    // 算出プロパティ経由で乱数を取得
    randomc() {
      return Math.random()
    }
  },
  methods: {
    // クリック時に処理を実行
    onclick() {
      this.current = new Date().toLocaleString()
    },
    // メソッド経由で乱数を取得
    randomm() {
      return Math.random()
    }
  }
}).mount('#app')