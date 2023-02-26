export const state = () => ({
  tasks: [
    {
      content: "Get Milk",
    }
  ]
});

export const mutations = {
  ADD_TASK (state, task) {
    state.tasks = [ { content: task, done: false }, ...state.tasks ];
  },

  REMOVE_TASK ( state, task ) {
    let FilteredTasks = state.filter( (t) => t.content !== task );
    state.tasks = FilteredTasks;
  },

  TOGGLE_TASK (state, task) {
    task.done = !task.done;
  }
}