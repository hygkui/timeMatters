<template>
  <div style="color: green;">
    <span>#title: <span>{{ detail.title }} </span></span>
    <span>#tags: <span>{{ detail.tags }}</span></span>
    <span>#估算时间: <span>{{ detail.time }} </span></span>
  </div>
</template>

<script>
  export default {
    name: 'TaskFile',
    props: ['detail', 'refStr']
  }
</script>
