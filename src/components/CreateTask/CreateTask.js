import styles from './CreateTask.module.scss';
import React from "react";
import {connect, useDispatch} from "react-redux";
import {
  showCreateTaskAction,
  decreaseCounter,
} from '../../redux/actions/actions'

const CreateTask = () => {
  const dispatch = useDispatch();
  const clickAdd = () => {
    dispatch(showCreateTaskAction());
  };
  return (
    <>
      <div className={styles.flexAddTask}>
        <input placeholder='Type your task...' className={styles.inputTask}/>
        <button className={styles.addButton} onClick={clickAdd}>Add</button>
      </div>
    </>
  );
};

export default CreateTask;