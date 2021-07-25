import React, {useState} from 'react';
import styles from './Task.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {
  faSquare as farSquare,
  faStar as farStar,
  faCheckSquare as farCheckSquare,
  faTrashAlt
} from '@fortawesome/free-regular-svg-icons'
import {useDispatch} from "react-redux";
import {selectTasks} from "../../redux/selectors/todoSelectors";
import {useSelector} from "react-redux";
import {
  loadTasks
} from '../../redux/actions/actions'

const Task = ({task}) => {
  const tasksSelector = useSelector(selectTasks);
  const dispatch = useDispatch();
  const [starIcon, setStarIcon] = useState(farStar);
  const [checkIcon, setCheckIcon] = useState(farSquare);
  const clickImportant = () => {
    starIcon === farStar ? setStarIcon(faStar) : setStarIcon(farStar);
  };
  const clickDelete = (id) => {
    const newTaskList = tasksSelector.filter(task => task.id !== id);
    dispatch(loadTasks(newTaskList));
  };

  const clickCheck = () => {
    checkIcon === farSquare ? setCheckIcon(farCheckSquare) : setCheckIcon(farSquare);
  };

  return (
    <div className={styles.bordered}>
      <div className={styles.flex}>
        <div className={styles.delete} onClick={() => {clickDelete(task.id)}}>
          <FontAwesomeIcon icon={faTrashAlt} className={styles.starIcon}/>
        </div>
        <div onClick={clickImportant}>
          <FontAwesomeIcon icon={starIcon} className={styles.starIcon}/>
        </div>
        <div>{task.text}</div>
      </div>
      <div onClick={clickCheck}>
        <FontAwesomeIcon icon={checkIcon} className={styles.checkBox}/>
      </div>
    </div>
  );
};

export default Task;