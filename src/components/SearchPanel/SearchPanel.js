import React, {useState} from 'react';
import styles from './SearchPanel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from 'react-redux';
import {showCreateTaskAction} from "../../redux/actions/actions";

const SearchPanel = () => {
  const dispatch = useDispatch();
  const createNewTask = () => {
    dispatch(showCreateTaskAction());
  };
  return (
    <>
      <div className={styles.alignCenter}>
        <input className={styles.searchInput} type='text' placeholder='Search tasks...'/>
        <div className={styles.btnGroup}>
          <button>
            Done
          </button>
          <button>
            All
          </button>
        </div>
        <button className={styles.addButton} onClick={createNewTask}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </>

  );
};


const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default SearchPanel;