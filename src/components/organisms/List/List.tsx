import styles from './List.module.css';
import { Card } from '../../../components';
import { boardInitialData } from '../../../reducers';

interface ListProps {
  index: number;
}

const List = ({ index }: ListProps) => {
  const { lists } = boardInitialData;
  const list = lists?.[index];

  return (
    <div className={styles.list}>
      <div className={styles.title}>{list?.title}</div>

      <div>
        {list?.cards?.map((card, cardIndex) => (
          <Card key={card.id} index={cardIndex} listIndex={index} />
        ))}
        <div className={styles.add} onClick={() => alert(`add new card in bottom of ${index}`)}>
          + Add a card
        </div>
      </div>
    </div>
  );
};

export default List;
