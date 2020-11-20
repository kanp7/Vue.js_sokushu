
// ファイル入力ボックス

Vue.createApp({
  data() {
    return {
      result: ""
    }
  },
  methods: {
    onclick() {
      let that = this
      // アップロードファイルを取得
      let upfile = this.$refs.upfile.files[0]
      let form = new FormData()
      // フォーム送信のための形式に変換
      form.append('upfile', upfile, upfile.name)
      // ファイルを送信
      fetch('upload.php', {
        method: 'POST',
        body: form
      })
      // 成功時にレスポンスデータを取得
      .then(function(response) {
        return response.text()
      })
      // ページに結果を表示
      .then(function(text) {
        that.result = text
      })
    }
  }
}).mount('#app')