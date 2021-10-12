import React from "react";
import "./App.scss";
import styles from "./App.module.scss";
import TaskList from "../TaskList/TaskList";
import SearchPanel from "../SearchPanel/SearchPanel";
import { connect, useSelector } from "react-redux";
import CreateTask from "../CreateTask/CreateTask";
import { selectShowCreateTask } from "../../redux/selectors/todoSelectors";

const App = () => {
  return (
    <>
      <h1>ToDo</h1>
      <div className={styles.flexView}>
        <SearchPanel />
        <CreateTask />
        <TaskList />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    showCreateTask: state.todo.showCreateTask,
    tasks: state.todo.tasks,
  };
};

export default connect(mapStateToProps)(App);
