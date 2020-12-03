<template>
  <div class="article">
    <span>記事コード : {{ id }}</span>
    <div>
      [<router-link v-bind:to="`/article/${id}/page/1`">1</router-link>]
      [<router-link v-bind:to="`/article/${id}/page/2`">2</router-link>]
      [<router-link v-bind:to="`/article/${id}/page/3`">3</router-link>]
    </div>
  </div>
  <hr />
  <router-view />
</template>
<script>
export default {
  name: 'Article',
  props: ['id','page_num'],
}
</script>

