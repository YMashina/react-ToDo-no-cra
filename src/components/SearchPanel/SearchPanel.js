import React, { useState } from "react";
import styles from "./SearchPanel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  showCreateTaskAction,
  setFilterAction,
} from "../../redux/actions/actions";
import { selectFilter } from "../../redux/selectors/todoSelectors";
import INITIAL_STATE from "../../redux/reducers/initialState";
import getDropdownName from "./constants";
import { IoIosAddCircleOutline, IoIosArrowRoundDown } from "react-icons/io";

const SearchPanel = () => {
  const dispatch = useDispatch();
  const filterSelector = useSelector(selectFilter);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownName = getDropdownName(filterSelector);
  const [dropdownIcon, setDropdownIcon] = useState(faChevronDown);
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
    setDropdownIcon(
      dropdownIcon === faChevronDown ? faChevronUp : faChevronDown
    );
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
          <button onClick={clickDropdown}>
            {dropdownName} <IoIosArrowRoundDown />
          </button>
          <div
            className={`${styles.dropdown} ${
              showDropdown ? styles.show : null
            }`}
          >
            <ul>
              {dropdownName !== "All" && (
                <li onClick={showDropdown ? clickFilterAll : null}>All</li>
              )}
              {dropdownName !== "Done" && (
                <li onClick={showDropdown ? clickFilterDone : null}>Done</li>
              )}
              {dropdownName !== "Active" && (
                <li onClick={showDropdown ? clickFilterNotDone : null}>
                  Active
                </li>
              )}
            </ul>
          </div>
        </div>
        <button className={styles.addButton} onClick={createNewTask}>
          <IoIosAddCircleOutline />
        </button>
      </div>
    </>
  );
};

export default SearchPanel;
