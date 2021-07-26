const filter = (tasksSelector, filterSelector) => {
  let filteredTasks = [];
  filteredTasks = tasksSelector.filter((taskItem) => {
    if (filterSelector.search.length > 0) {
      if (taskItem.text.includes(filterSelector.search)) return taskItem;
    }
    if (filterSelector.search.length === 0) return taskItem;
  });

  if (filterSelector.isDone) {
    filteredTasks = filteredTasks.filter((task) => task.checked);
  }
  console.log("filteredTasks");
  console.log(filteredTasks);
  return filteredTasks;
};

export { filter };
