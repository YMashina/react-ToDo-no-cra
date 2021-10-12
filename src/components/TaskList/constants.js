const compareImportant = (a, b) => {
  return b.important - a.important;
};

const compareDone = (a, b) => {
  return a.checked - b.checked;
};

const filter = (tasksSelector, filterSelector) => {
  let filteredTasks;
  filteredTasks = tasksSelector.filter((taskItem) => {
    if (filterSelector.search.length > 0) {
      if (taskItem.text.includes(filterSelector.search)) return taskItem;
    }
    if (filterSelector.search.length === 0) return taskItem;
  });

  if (filterSelector.isDone) {
    filteredTasks = filteredTasks.filter((task) => task.checked);
  } else if (filterSelector.notDone) {
    filteredTasks = filteredTasks.filter((task) => !task.checked);
  } else if (filterSelector.important) {
    filteredTasks = filteredTasks.filter((task) => task.important);
  }

  //filteredTasks.sort(compareImportant);
  //filteredTasks.sort(compareDone);
  return filteredTasks;
};

export { filter };
