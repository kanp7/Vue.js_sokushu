
// ディレクティブの自作

Vue
.createApp({
  data() {
    return {
      color: 'Yellow'
    }
  }
})
// a. ディレクティブを定義
// directiveメソッド
// directive(name,def) name:ディレクティブの名前 def:動作の定義
.directive('highlight', {
  mounted(el,binding,vnode,oldVnode) {
    el.style.backgroundColor = binding.value
  }
})
.mount('#app')