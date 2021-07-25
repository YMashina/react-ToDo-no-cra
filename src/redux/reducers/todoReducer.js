import { increaseCounter, decreaseCounter } from '../actions/actions';

const INITIAL_STATE = {
  showCreateTask: false,
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SHOW_CREATE_TASK':
      return {
        ...state, showCreateTask: !state.showCreateTask
      };

    case 'DECREMENT':
      return {
        ...state, count: state.count - 1,
      };
    default: return state;
  }

};

export default todoReducer;
