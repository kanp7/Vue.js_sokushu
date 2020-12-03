<template>
  <input type="button" v-on:click="onminus" value="-" />
  <!-- b. カウンター値を取得 -->
  {{ count }} / {{ ceiling }}
  <input type="button" v-on:click="onplus" value="+" />
</template>

<script>

export default {
  name: 'App',
  // a.現在のカウンター値を取得(算出プロパティ)
  computed: {
    count() {
      return this.$store.state.count
    },
    ceiling() {
      return this.$store.getters.ceiling(10)
    },
  },
  methods: {
    // c. [+]ボタンでカウンター値を加算
    onplus() {
      this.$store.commit('plus')
    },
    // d. [-]ボタンでカウンターを減算
    onminus() {
      this.$store.commit('minus')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
