import React from 'react';
import styles from './SearchPanel.module.scss';

const SearchPanel = () => {
  return (
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
        <button className={styles.addButton}>
          &#10133;
        </button>
      </div>
  );
};

export default SearchPanel;