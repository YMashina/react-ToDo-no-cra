import styles from './TaskList.module.scss';
import React from "react";
import Task from "../Task/Task";
const TaskList = () => {
  return (
    <>
      <div className={styles.taskList}>
        <Task/>
        <Task/>
        <Task/>
      </div>

    </>
  );
};

export default TaskList;