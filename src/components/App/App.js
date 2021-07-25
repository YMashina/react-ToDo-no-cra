import React from 'react';
import './App.scss';
import styles from './App.module.scss';
import TaskList from "../TaskList/TaskList";
import SearchPanel from "../SearchPanel/SearchPanel";
import { connect } from "react-redux";
import CreateTask from "../CreateTask/CreateTask";

const App = (props) => {
  return (
    <>
      <h1>Todo</h1>
      <div className={styles.flexView}>
        <SearchPanel/>
        {
          props.showCreateTask ? <CreateTask/> : null
        }
        <TaskList/>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    showCreateTask: state.todo.showCreateTask,
  }
}

export default connect(mapStateToProps)(App);