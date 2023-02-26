export const state = () => ({
  tasks: []
});

export const mutations = {
  ADD_TASK (state, task) {
    state.tasks = [ { id: new Date().toISOString()+task, content: task, done: false }, ...state.tasks ];
  },

  REMOVE_TASK ( state, task ) {
    let FilteredTasks = state.tasks.filter( (t) => t.id !== task.id );
    state.tasks = FilteredTasks;
  },

  TOGGLE_TASK (state, task) {
    task.done = !task.done;
  }
}