import styles from "./TaskList.module.scss";
import React from "react";
import Task from "../Task/Task";
import { selectTasks, selectFilter } from "../../redux/selectors/todoSelectors";
import { useSelector } from "react-redux";
import { filter } from "./constants";

const TaskList = () => {
  const tasksSelector = useSelector(selectTasks);
  console.log("tasksSelector");
  console.log(tasksSelector);
  const filterSelector = useSelector(selectFilter);
  console.log("filterSelector");
  console.log(filterSelector);
  const filteredTasks = filter(tasksSelector, filterSelector);
  return (
    <>
      {filteredTasks.length > 0 ? (
        <ul className={styles.taskList}>
          {filteredTasks.map((task) => (
            <li key={task.id}>
              <Task task={task} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.noTasksFound}>{`No tasks found${
          filterSelector.search.length > 0
            ? `: ${filterSelector.search}`
            : ". Create one!"
        }`}</div>
      )}
    </>
  );
};

export default TaskList;
