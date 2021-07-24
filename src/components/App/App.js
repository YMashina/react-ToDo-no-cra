import React from 'react';
import './App.scss';
import styles from './App.module.scss';
import TaskList from "../TaskList/TaskList";
import SearchPanel from "../SearchPanel/SearchPanel";

const App = () => {
  return (
    <>
      <h1>Todo</h1>
      <div className={styles.flexView}>
        <SearchPanel/>
        <TaskList/>
      </div>
    </>
  );
};

export default App;