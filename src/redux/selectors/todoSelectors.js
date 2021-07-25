import {createSelector} from "reselect";

const selectShowCreateTask = createSelector(
  (state) => state.todo,
  (todo) => todo.showCreateTask
);

export {
  selectShowCreateTask
}