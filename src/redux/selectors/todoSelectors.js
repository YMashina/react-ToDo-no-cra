import {createSelector} from "reselect";

const selectShowCreateTask = createSelector(
  (state) => state.todo,
  (todo) => todo.showCreateTask
);

const selectTasks = createSelector(
  (state) => state.todo,
  (todo) => todo.tasks
);

const selectFilter = createSelector(
  (state) => state.todo,
  (todo) => todo.filter
);

export {
  selectShowCreateTask,
  selectTasks,
  selectFilter
}