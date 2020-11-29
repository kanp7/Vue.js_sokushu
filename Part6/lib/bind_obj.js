Vue.createApp({
  data() {
    return {
      //属性情報をオブジェクト形式で準備
      attrs: {
        size: 12,
        maxlength: 15,
        required: true
      }
    }
  }
}).mount('#app')