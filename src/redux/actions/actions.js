const showCreateTaskAction = () => {
  return {
    type: 'SHOW_CREATE_TASK'
  };
};

const addNewTaskAction = (newTask) => {
  return {
    type: 'ADD_NEW_TASK',
    payload: newTask
  };
};

const loadTasks = (newTask) => {
  return {
    type: 'LOAD_TASKS',
    payload: newTask
  };
};

export {
  showCreateTaskAction,
  addNewTaskAction,
  loadTasks
}
