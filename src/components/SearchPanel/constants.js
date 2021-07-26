const getDropdownName = (filterSelector) => {
  let name;
  if (filterSelector.isDone) {
    name = "Done";
  } else if (filterSelector.notDone) {
    name = "Not Done";
  } else if (filterSelector.important) {
    name = "Important";
  } else name = "All";
  return name;
};

export default getDropdownName;
