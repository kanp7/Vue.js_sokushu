Vue
.createApp({})
.component('my-hello',{
  // プロパティを定義
  props: [ 'yourName' ],

  // プロパティ値の型を制限
  // props: {
  //   yourName: {
  //     type: String,
  //     required: true
  //   }
  // },

  // 自作の検証ルール
  // props: {
  //   yourName: {
  //     type: String,
  //     required: true,
  //     validator(value) {
  //       return value.length <= 5
  //     }
  //   } 
  // },

  template: '<div>こんにちは、{{ yourName }}さん！</div>'
})
.mount('#app')