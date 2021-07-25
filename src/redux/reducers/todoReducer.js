const INITIAL_STATE = {
  showCreateTask: false,
  tasks: []
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SHOW_CREATE_TASK':
      return {
        ...state, showCreateTask: !state.showCreateTask
      };

    case 'ADD_NEW_TASK':
      return {
        ...state, tasks: [action.payload, ...state.tasks],
      };

    case 'LOAD_TASKS':
      return {
        ...state, tasks: action.payload,
      };

    default: return state;
  }

};

export default todoReducer;
