import styles from './List.module.css';

import React from 'react';

interface ListProps {
  index: number;
}

const List = ({ index }: ListProps) => {
  return (
    <div className={styles.list}>
      <div>
        <div className={styles.add} onClick={() => alert(`add new card in bottom of ${index}`)}>
          + Add a card
        </div>
      </div>
    </div>
  );
};

export default List;
