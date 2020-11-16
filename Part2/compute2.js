
// プロパティ値をアプリ独自のルールで加工する - 算出プロパティ

Vue.createApp({
  data() {
    return {
      email: 'Yamada@examaple.com'
    }
  },
  // emailプロパティの値を加工するlocalEmailメソッドを定義
  methods: {
    localEmail() {
      return this.email.split('@')[0].toLowerCase()
    }
  }
}).mount('#app')