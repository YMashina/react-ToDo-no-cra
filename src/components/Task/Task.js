import React, { useEffect, useRef, useState } from "react";
import styles from "./Task.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPen } from "@fortawesome/free-solid-svg-icons";
import {
  faSquare as farSquare,
  faStar as farStar,
  faCheckSquare as farCheckSquare,
  faTrashAlt,
  faSave as farSave,
} from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { selectTasks } from "../../redux/selectors/todoSelectors";
import { useSelector } from "react-redux";
import { loadTasks } from "../../redux/actions/actions";
import * as ReactDOM from "react-dom";

const Task = ({ task }) => {
  const [taskInputValue, setTaskInputValue] = useState(task.text);
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const tasksSelector = useSelector(selectTasks);
  const dispatch = useDispatch();
  const inputRef = useRef();

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

  const handleTaskInputChange = (event) => {
    setTaskInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      clickSave();
    }
  };
  const clickEdit = () => {
    setIsBeingEdited(true);
  };

  const clickSave = () => {
    const newTaskList = tasksSelector.map((taskItem) => {
      if (taskItem.id === task.id) taskItem.text = taskInputValue;
      return taskItem;
    });
    dispatch(loadTasks(newTaskList));
    setIsBeingEdited(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [isBeingEdited]);

  return (
    <div className={styles.bordered}>
      {isBeingEdited ? (
        <>
          <input
            ref={inputRef}
            className={styles.editInput}
            value={taskInputValue}
            onChange={handleTaskInputChange}
            onKeyPress={handleKeyPress}
          />
          <div className={styles.saveIcon} onClick={clickSave}>
            <FontAwesomeIcon icon={farSave} />
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Task;
