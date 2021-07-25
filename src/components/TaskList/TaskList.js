import styles from './TaskList.module.scss';
import React from "react";
import Task from "../Task/Task";
import {selectTasks, selectFilter} from "../../redux/selectors/todoSelectors";
import {useSelector} from "react-redux";

const TaskList = () => {
  const tasksSelector = useSelector(selectTasks);
  const filterSelector = useSelector(selectFilter);
  return (
    <>
      <ul className={styles.taskList}>
        {tasksSelector.filter(taskItem => {
          if (filterSelector !== '') {

            if (taskItem.text.includes(filterSelector)) {
              console.log(`${taskItem.text} includes ${filterSelector}`)
              console.log(`${taskItem.text} fits` )
              return taskItem;
            }
          }
          if (filterSelector === '')
            return taskItem;
            })
          .map(task => {
          return <li key={task.id}><Task task={task}/></li>
        })}
      </ul>

    </>
  );
};

export default TaskList;