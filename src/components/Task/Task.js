import React, { useState } from "react";
import styles from "./Task.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPen } from "@fortawesome/free-solid-svg-icons";
import {
  faSquare as farSquare,
  faStar as farStar,
  faCheckSquare as farCheckSquare,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { selectTasks } from "../../redux/selectors/todoSelectors";
import { useSelector } from "react-redux";
import { loadTasks } from "../../redux/actions/actions";

const Task = ({ task }) => {
  const tasksSelector = useSelector(selectTasks);
  const dispatch = useDispatch();
  const clickImportant = () => {
    const newTaskList = tasksSelector.map((taskItem) => {
      if (taskItem.id === task.id) taskItem.important = !taskItem.important;
      return taskItem;
    });
    dispatch(loadTasks(newTaskList));
  };
  const clickDelete = () => {
    const newTaskList = tasksSelector.filter(
      (taskItem) => taskItem.id !== task.id
    );
    dispatch(loadTasks(newTaskList));
  };

  const clickCheck = () => {
    const newTaskList = tasksSelector.map((taskItem) => {
      if (taskItem.id === task.id) taskItem.checked = !taskItem.checked;
      return taskItem;
    });
    dispatch(loadTasks(newTaskList));
  };

  const clickEdit = () => {};

  return (
    <div className={styles.bordered}>
      <div className={styles.flex}>
        <div
          className={styles.delete}
          onClick={() => {
            clickDelete(task.id);
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} className={styles.delete} />
        </div>
        <div onClick={clickImportant}>
          <FontAwesomeIcon
            icon={task.important ? faStar : farStar}
            className={styles.starIcon}
          />
        </div>
        <div className={styles.text}>{task.text}</div>
      </div>
      <div className={styles.flex}>
        <div onClick={clickEdit}>
          <FontAwesomeIcon icon={faPen} className={styles.edit} />
        </div>
        <div onClick={clickCheck}>
          <FontAwesomeIcon
            icon={task.checked ? farCheckSquare : farSquare}
            className={styles.checkBox}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
