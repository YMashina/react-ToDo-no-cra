import styles from './TaskList.module.scss';
import React from "react";
import Task from "../Task/Task";
import {selectTasks} from "../../redux/selectors/todoSelectors";
import {useSelector} from "react-redux";

const TaskList = () => {
  const tasksSelector = useSelector(selectTasks);

  return (
    <>
      <ul className={styles.taskList}>
        {tasksSelector.map(task => {
          return <li key={task.id}><Task task={task}/></li>
        })}
      </ul>

    </>
  );
};

export default TaskList;