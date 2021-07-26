const showCreateTaskAction = () => {
  return {
    type: "SHOW_CREATE_TASK",
  };
};

const addNewTaskAction = (newTask) => {
  return {
    type: "ADD_NEW_TASK",
    payload: newTask,
  };
};

const loadTasks = (newTask) => {
  return {
    type: "LOAD_TASKS",
    payload: newTask,
  };
};

const setFilterAction = (filter) => {
  return {
    type: "SET_FILTER",
    payload: filter,
  };
};

export { showCreateTaskAction, addNewTaskAction, loadTasks, setFilterAction };
