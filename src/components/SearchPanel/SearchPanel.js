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
import INITIAL_STATE from "../../redux/reducers/initialState";
import getDropdownName from "./constants";

const SearchPanel = () => {
  const dispatch = useDispatch();
  const filterSelector = useSelector(selectFilter);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownName = getDropdownName(filterSelector);
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
    dispatch(setFilterAction({ ...INITIAL_STATE.filters, isDone: true }));
    setShowDropdown(false);
  };

  const clickFilterAll = () => {
    dispatch(setFilterAction({ ...INITIAL_STATE.filters }));
    setShowDropdown(false);
  };

  const clickFilterNotDone = () => {
    dispatch(setFilterAction({ ...INITIAL_STATE.filters, notDone: true }));
    setShowDropdown(false);
  };

  const clickFilterImportant = () => {
    dispatch(setFilterAction({ ...INITIAL_STATE.filters, important: true }));
    setShowDropdown(false);
  };

  const clickDropdown = () => {
    setShowDropdown(!showDropdown);
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
          <button onClick={clickDropdown}>{dropdownName}</button>
          {showDropdown ? (
            <div className={styles.dropdown}>
              <ul>
                <li onClick={clickFilterDone}>Done</li>
                <li onClick={clickFilterNotDone}> Not done</li>
                <li onClick={clickFilterImportant}> Important </li>
                <li onClick={clickFilterAll}>All</li>
              </ul>
            </div>
          ) : null}
        </div>
        <button className={styles.addButton} onClick={createNewTask}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </>
  );
};

export default SearchPanel;
