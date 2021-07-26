import React, { useState } from "react";
import styles from "./SearchPanel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  showCreateTaskAction,
  setFilterAction,
} from "../../redux/actions/actions";
import { selectFilter } from "../../redux/selectors/todoSelectors";

const SearchPanel = () => {
  const dispatch = useDispatch();
  const filterSelector = useSelector(selectFilter);
  const doneButtonStyle = filterSelector.isDone ? styles.buttonClicked : null;
  const allButtonStyle = filterSelector.isDone ? null : styles.buttonClicked;
  const [searchInputValue, setSearchInputValue] = useState(
    filterSelector.search
  );
  const createNewTask = () => {
    dispatch(showCreateTaskAction());
  };

  const handleSearchInputChange = (event) => {
    dispatch(
      setFilterAction({ ...filterSelector, search: event.target.value })
    );
    setSearchInputValue(event.target.value);
  };

  const clickFilterDone = () => {
    dispatch(setFilterAction({ ...filterSelector, isDone: true }));
  };

  const clickFilterAll = () => {
    dispatch(setFilterAction({ ...filterSelector, isDone: false }));
  };

  return (
    <>
      <div className={styles.alignCenter}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search tasks..."
          onChange={handleSearchInputChange}
          value={searchInputValue}
        />
        <div className={styles.btnGroup}>
          <button className={doneButtonStyle} onClick={clickFilterDone}>
            Done
          </button>
          <button className={allButtonStyle} onClick={clickFilterAll}>
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
