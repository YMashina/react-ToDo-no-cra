import React, {useState} from 'react';
import styles from './SearchPanel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import {showCreateTaskAction} from "../../redux/actions/actions";
import {selectTasks} from "../../redux/selectors/todoSelectors";

const SearchPanel = () => {
  const dispatch = useDispatch();
  const tasksSelector = useSelector(selectTasks);
  const [searchInputValue, setSearchInputValue] = useState('')
  const createNewTask = () => {
    dispatch(showCreateTaskAction());
  };

  const handleSearchInputChange = (event) => {
    setSearchInputValue(event.target.value);
    tasksSelector.filter(taskItem => {
      taskItem.text.includes(searchInputValue);
    });

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


const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default SearchPanel;