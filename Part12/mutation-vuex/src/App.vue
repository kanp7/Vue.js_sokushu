<template>
  <input type="button" v-on:click="onclick(-1)" value="-" />
  <!-- b. カウンター値を取得 -->
  {{ count }} / {{ ceiling }}
  <input type="button" v-on:click="onclick(1)" value="+" />
</template>

<script>
// import { mapMutations } from 'vuex'
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
    onclick(step) {
      this.$store.commit('update', { step })
    }

    //mapMutations関数を使う場合
    // ...mapMutations(['update']),
    // onclick(step) {
    //   this.update({ step })
    // }
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
