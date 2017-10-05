<template>
  <task-dir :tasks="tasks" :title="'root'" :refStr="'tasks'"></task-dir>
</template>

<script>
  import TaskDir from '../components/TaskDir'
  import { db } from '../fb'

  export default {
    firebase: {
      tasks: db.ref('tasks')
    },
    components: {
      'task-dir': TaskDir
    }
  }
</script>
