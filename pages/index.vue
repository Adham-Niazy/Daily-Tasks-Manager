<template>
  <main>
    <h1>Daily Tasks Board</h1>
    <p>Create your list of daily tasks</p>

    <div class="create-new">
      <input
        type="text"
        v-model="newTask"
        placeholder="Add a new task"
        @keypress.enter="addTask"
      />

      <button @click="addTask">Add</button>
    </div>

    <div class="tasks">
      <!-- COMPONENT -->
      <Task v-for="task in $store.state.tasks" :key="task.id" :task="task" />
    </div>

    <div class="create-new">
      <Button @click="renewTasks">RENEW ALL TASKS</Button>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask && this.newTask.length >= 3) {
        this.$store.commit("ADD_TASK", this.newTask);
        this.newTask = "";
      }
    },
    renewTasks() {
      this.$store.commit("RENEW_ALL_TASK");
    },
  },
};
</script>
