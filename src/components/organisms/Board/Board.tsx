import styles from './Board.module.css';
import { useState } from 'react';
import { List, ListEditor } from '../../../components';
import { useBoardContext } from '../../../hooks';

const Board = () => {
  const [addingList, setAddingList] = useState(false);
  const { state } = useBoardContext();
  const { lists } = state;

  const toggleAddingList = () => setAddingList(!addingList);

  return (
    <div className={styles.board}>
      {lists?.map((list, index) => (
        <List key={list.id} index={index} />
      ))}
      <div className={styles.add}>
        {addingList ? (
          <div className={styles.editor}>
            <ListEditor isEditMode={false} onFinish={toggleAddingList} />
          </div>
        ) : (
          <div onClick={toggleAddingList} className={styles.button}>
            + Add a list
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
