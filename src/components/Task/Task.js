import React, {useState} from 'react';
import styles from './Task.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar } from '@fortawesome/free-solid-svg-icons'
import {faSquare as farSquare, faStar as farStar, faCheckSquare as farCheckSquare} from '@fortawesome/free-regular-svg-icons'

const Task = () => {
  const [starIcon, setStarIcon] = useState(farStar);
  const [checkIcon, setCheckIcon] = useState(farSquare);
  const clickImportant = () => {
    starIcon===farStar ? setStarIcon(faStar) : setStarIcon(farStar);
  };
  const clickCheck = () => {
    checkIcon===farSquare ? setCheckIcon(farCheckSquare) : setCheckIcon(farSquare);
  };

  return (
    <>
      <div className={styles.bordered}>
        <div className={styles.flex}>
          <div onClick={clickImportant}>
            <FontAwesomeIcon icon={starIcon} className={styles.starIcon} />
          </div>

          <div>Task</div>
        </div>
        <div onClick={clickCheck}>
          <FontAwesomeIcon icon={checkIcon} className={styles.checkBox}/>
        </div>

      </div>
    </>
  );
};

export default Task;