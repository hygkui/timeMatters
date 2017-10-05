<template>
  <div>
    <task-dir v-if="detail.type == 'dir'" :title="detail.title" :tags="detail.tags" :tasks="detail.files" :refStr="refStr + '/' + taskKey + '/files'"></task-dir>
    <task-file v-if="detail.type == 'file'" :detail="detail" :refStr="refStr"></task-file>
  </div>
</template>

<script>
  import TaskDir from './TaskDir'
  import TaskFile from './TaskFile'

  export default {
    name: 'Task',
    props: ['detail', 'taskKey', 'refStr'],
    components: {
      'task-dir': TaskDir,
      'task-file': TaskFile
    }
  }
</script>
