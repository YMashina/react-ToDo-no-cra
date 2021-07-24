import React from 'react';
import styles from './App.scss';
import TaskList from "../TaskList/TaskList";
import SearchPanel from "../SearchPanel/SearchPanel";

const App = () => {
  return (
    <>
      <h1>Todo</h1>
      <SearchPanel/>
      <TaskList/>
    </>
  );
};

export default App;