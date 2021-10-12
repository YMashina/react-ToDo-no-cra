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
import { BsCircle, BsCheckCircle, BsArrowDown } from "react-icons/bs";
import { VscEdit } from "react-icons/vsc";
import { AiOutlineDelete, AiOutlineEnter } from "react-icons/ai";

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
    <div
      className={`${styles.bordered} ${task.checked ? styles.taskDone : null}`}
    >
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
            <BsArrowDown />
          </div>
        </>
      ) : (
        <>
          <div className={styles.flex}>
            <div onClick={clickCheck}>
              {task.checked ? (
                <BsCheckCircle className={styles.checkBox} />
              ) : (
                <BsCircle className={styles.checkBox} />
              )}
            </div>

            <div className={styles.text}>{task.text}</div>
          </div>
          <div className={styles.flex}>
            <div className={styles.flex}>
              <div onClick={clickEdit}>
                <VscEdit className={styles.edit} />
              </div>

              <div
                className={styles.delete}
                onClick={() => {
                  clickDelete(task.id);
                }}
              >
                <AiOutlineDelete className={styles.delete} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Task;
