Vue
.createApp({
  data() {
    return {
      // カウンター値
      count: 0
    }
  },
  methods: {
    // incrementイベントでカウンター値を増減
    onincrement(e) {
      this.count += e
    }
  }
})

// my-counterコンポーネントの定義
.component('my-counter',{
  // 増減値
  props: ['step'],

  // incrementイベント
  // emits: ['increment'],
  
  // カスタムイベントの検証
  emits: {
    increment(step) {
      // step値が整数値であれば正しい
      if (step && Number.isInteger(step)) {
        return true
      } else {
        console.log('Invalid increment event!!')
        return false
      }
    }
  },
  template: '<input type="button" v-on:click="onclick" v-bind:value="step" />',
  methods: {
    // クリック時に増減値を通知（イベント発生）
    // $emit(event[,args])
    // event: イベント名 args: 親コンポーネントに伝達するデータ
    onclick() {
      this.$emit('increment',Number(this.step))
    }
  }
})
.mount('#app')