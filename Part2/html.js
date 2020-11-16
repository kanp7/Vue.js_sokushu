
// 文字列をHTMLとして埋め込む - v-html 


Vue.createApp({
  data() {
    return {
      message: `<h1>こんにちは</h1>
      <span><a href="https://jp.vuejs.org/">Vue.js!</a></span>`
    }
  }
}).mount('#app')