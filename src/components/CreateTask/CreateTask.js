import styles from "./CreateTask.module.scss";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showCreateTaskAction,
  addNewTaskAction,
} from "../../redux/actions/actions";
import generateHexString from "./constants";
import { BsArrowRight } from "react-icons/bs";
import { selectShowCreateTask } from "../../redux/selectors/todoSelectors";

const CreateTask = () => {
  const showCreateTask = useSelector(selectShowCreateTask);
  const dispatch = useDispatch();
  const [taskInputValue, setTaskInputValue] = useState("");
  const clickAdd = () => {
    if (taskInputValue)
      dispatch(
        addNewTaskAction({
          id: generateHexString(),
          text: taskInputValue,
          important: false,
          checked: false,
        })
      );
    dispatch(showCreateTaskAction());
    setTaskInputValue("");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      clickAdd();
    }
  };
  const handleTaskInputChange = (event) => {
    setTaskInputValue(event.target.value);
  };

  return (
    <>
      <div
        className={`${styles.flexAddTask} ${
          showCreateTask ? styles.show : null
        }`}
      >
        <input
          placeholder="Type your task..."
          className={styles.inputTask}
          value={taskInputValue}
          onChange={handleTaskInputChange}
          onKeyPress={handleKeyPress}
        />
        <button className={styles.addButton} onClick={clickAdd}>
          <BsArrowRight />
        </button>
      </div>
    </>
  );
};

export default CreateTask;
