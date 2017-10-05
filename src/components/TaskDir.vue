<template>
  <div style="margin-left: 5px;">
    <button style="color: blue;" @click="toggleShowChild">{{ title }} {{ tags }} {{ refStr }} {{ showChild ? '-' : '+' }} </button>

    <div v-show="showChild">
      <div class="form">
        <input v-model="newTask.title" placeholder="title">
        <input v-model="newTask.tags" placeholder="tags">
        <input v-model="newTask.time" type="number" placeholder="time">
        <button @click="addTaskFile">Add New Task</button>
      </div>

      <div class="form">
        <input v-model="newTask.title" placeholder="title">
        <input v-model="newTask.tags" placeholder="tags">
        <button @click="addTaskDir">Add New Task Collection</button>
      </div>

      <ul>
        <li v-for="task, index in tasks" :key="index">
          <Task :detail="task" :taskKey="task['.key'] || index" :refStr="refStr"></Task>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
  import { db } from '../fb'

  export default {
    name: 'TaskDir',
    data () {
      return {
        newTask: {},
        showChild: false
      }
    },
    props: ['tasks', 'title', 'tags', 'refStr'],
    methods: {
      addTaskDir () {
        this.newTask.files = {}
        this.newTask.type = 'dir'
        db.ref(this.refStr).push(this.newTask)
        this.newTask = {}
        this.$forceUpdate()
      },
      addTaskFile () {
        this.newTask.type = 'file'
        db.ref(this.refStr).push(this.newTask)
        this.newTask = {}
        this.$forceUpdate()
      },
      toggleShowChild () {
        this.showChild = !this.showChild
      }
    },
    beforeCreate: function () {
      this.$options.components.Task = require('./Task.vue').default
    }
  }
</script>

<style>
  .form {
    margin-left: 25px;
  }
</style>
