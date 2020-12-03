<template>
  <div class="page">
    <span>ページ番号：{{ page_num }}</span>
  </div>
</template>
<script>
export default {
  name: 'Page',
  props: ['page_num'],
}
</script>