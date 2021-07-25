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

    case 'TOGGLE_IMPORTANT':
      return {
        ...state, important: action.payload,
      };

    case 'TOGGLE_CHECKED':
      return {
        ...state, checked: action.payload,
      };

    case 'SET_FILTER':
      return {
        ...state, filter: action.payload,
      };

    default: return state;
  }

};

export default todoReducer;
