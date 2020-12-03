// a.プラグインを定義
let MyUtil = {
  install(app,options = {}) {
    // b. v-highlightディレクティブを定義
    app.directive('highlight', {
      mounted(el,binding, vnode,oldVnode) {
        // b.borderオプションの有無で処理を切り替え
        if (options.border) {
          el.style.border = `1px solid ${binding.value}`
        } else {
          el.style.backgroundColor = binding.value
        }
      }
    })
  }
}