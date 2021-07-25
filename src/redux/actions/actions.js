const showCreateTaskAction = () => {
  return {
    type: 'SHOW_CREATE_TASK'
  };
};

const decreaseCounter = () => {
  return {
    type: 'DECREMENT',
  };
};

export {
  showCreateTaskAction,
  decreaseCounter
}
