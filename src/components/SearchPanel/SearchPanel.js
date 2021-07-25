import React, {useState} from 'react';
import styles from './SearchPanel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import {showCreateTaskAction, setFilterAction} from "../../redux/actions/actions";
import {selectTasks} from "../../redux/selectors/todoSelectors";

const SearchPanel = () => {
  const dispatch = useDispatch();
  const [searchInputValue, setSearchInputValue] = useState('')
  const createNewTask = () => {
    dispatch(showCreateTaskAction());
  };

  const handleSearchInputChange = (event) => {
    dispatch(setFilterAction(event.target.value));
    setSearchInputValue(event.target.value);
  };

  return (
    <>
      <div className={styles.alignCenter}>
        <input
          className={styles.searchInput}
          type='text'
          placeholder='Search tasks...'
          onChange={handleSearchInputChange}
          value={searchInputValue}/>
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

export default SearchPanel;