<template>
  <div class="article">
    <span>記事コード : {{ id }}</span>
  </div>
</template>
<script>
export default {
  name: 'Article',
  // idプロパティを宣言
  props: ['id'],
}
</script>