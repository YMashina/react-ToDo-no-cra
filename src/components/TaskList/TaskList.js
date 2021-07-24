import './TaskList.module.scss';
import React from "react";
import Task from "../Task/Task";
const TaskList = () => {
  return (
    <>
      <div className='taskList'>
        <Task/>
        <Task/>
        <Task/>
      </div>

    </>
  );
};

export default TaskList;