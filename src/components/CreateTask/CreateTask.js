import styles from "./CreateTask.module.scss";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  showCreateTaskAction,
  addNewTaskAction,
} from "../../redux/actions/actions";
import generateHexString from "./constants";

const CreateTask = () => {
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
    <div>
      <div className={styles.flexAddTask}>
        <input
          placeholder="Type your task..."
          className={styles.inputTask}
          value={taskInputValue}
          onChange={handleTaskInputChange}
          onKeyPress={handleKeyPress}
        />
        <button className={styles.addButton} onClick={clickAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default CreateTask;
