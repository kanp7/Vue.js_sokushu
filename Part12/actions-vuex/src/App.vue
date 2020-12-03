<template>
  <input type="button" v-on:click="onclick(-1)" value="-" />
  {{ count }} / {{ ceiling }}
  <input type="button" v-on:click="onclick(1)" value="+" />
</template>

<script>
// import {  mapActions } from 'vuex'

export default {
  name: 'App',
  computed: {
    count() {
      return this.$store.state.count
    },
    ceiling() {
      return this.$store.getters.ceiling
    }
  },
  methods: {  
    onclick(step) {
      this.$store.dispatch('asyncUpdate', { step })
    }
  }

  // mapActions関数を使う場合
  // methods: {
  //   ...mapActions(['asyncUpdate']),
  //   onclick(step) {
  //     this.asyncUpdate({ step })
  //   }
  // }
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
