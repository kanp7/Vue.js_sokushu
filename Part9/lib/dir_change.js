Vue
.createApp({
  data() {
    return {
      color: 'Yellow'
    }
  }
})

.directive('highlight', {
  // a. マウント時に実行（初回のみ）
  mounted(el,binding,vnode,oldVnode) {
    el.style.backgroundColor = binding.value
  },
  // 親コンポーネントが変化した時
  updated(el,binding,vnode,oldvnode) {
    el.style.backgroundColor = binding.value
  },
})
.mount('#app')