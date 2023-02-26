export const state = () => ({
  tasks: getFromDataSource(DATA_SOURCE_KEY) || [],
});

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [{ id: new Date().toISOString() + task, content: task, done: false }, ...state.tasks];
    updateDataSource(DATA_SOURCE_KEY, state.tasks);
  },

  REMOVE_TASK(state, task) {
    let FilteredTasks = state.tasks.filter((t) => t.id !== task.id);
    state.tasks = FilteredTasks;
    updateDataSource(DATA_SOURCE_KEY, state.tasks);
  },

  TOGGLE_TASK(state, task) {
    task.done = !task.done;
    updateDataSource(DATA_SOURCE_KEY, state.tasks);
  },

  RENEW_ALL_TASK(state) {
    for (let i = 0; i < state.tasks.length; i++) {
      state.tasks[i].done = false;
    }
    updateDataSource(DATA_SOURCE_KEY, state.tasks);
  }
}

/// UTILS (LOCAL STORAGE) Methods
const DATA_SOURCE_KEY = 'DAILY_TASKS';

function updateDataSource(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getFromDataSource(key) {
  return JSON.parse(localStorage.getItem(key));
}