
// イベント処理を伴うディレクティブ

Vue
.createApp({
  data() {
    return {
      color: 'Yellow'
    }
  }
})
.directive('highlight', {
  mounted(el,binding) {
    // mouseenter時のイベント処理を定義
    el.addEventListener('mouseenter', function() {
      this.style.backgroundColor = binding.value
    }, false)
    // mouseleave時のイベント処理を定義
    el.addEventListener('mouseleave', function() {
      this.style.backgroundColor = ""
    }, false)
  }
})
.mount('#app')