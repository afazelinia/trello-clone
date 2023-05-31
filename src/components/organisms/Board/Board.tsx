import styles from './Board.module.css';
import { List } from '../../../components';
import { boardInitialData } from '../../../reducers';

const Board = () => {
  const { lists } = boardInitialData;
  return (
    <div className={styles.board}>
      {lists?.map((list, index) => (
        <List key={list.id} index={index} />
      ))}
      <div className={styles.add}>
        <div onClick={() => alert('add new list')} className={styles.button}>
          + Add a list
        </div>
      </div>
    </div>
  );
};

export default Board;
