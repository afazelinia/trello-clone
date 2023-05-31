import styles from './List.module.css';
import { useState } from 'react';
import { Card, CardEditor } from '../../../components';
import { boardInitialData } from '../../../reducers';

interface ListProps {
  index: number;
}

const List = ({ index }: ListProps) => {
  const [addingCard, setAddingCard] = useState(false);
  const { lists } = boardInitialData;
  const list = lists?.[index];

  const toggleAddingCard = () => setAddingCard(!addingCard);

  return (
    <div className={styles.list}>
      <div className={styles.title}>{list?.title}</div>
      <div>
        {list?.cards?.map((card, cardIndex) => (
          <Card key={card.id} index={cardIndex} listIndex={index} />
        ))}
        {addingCard ? (
          <CardEditor listIndex={index} isEditMode={false} onFinish={toggleAddingCard} />
        ) : (
          <div className={styles.add} onClick={toggleAddingCard}>
            + Add a card
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
