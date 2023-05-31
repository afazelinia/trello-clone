import styles from './List.module.css';
import { useState } from 'react';
import { Card, CardEditor, ListEditor } from '../../../components';
import { boardInitialData } from '../../../reducers';

interface ListProps {
  index: number;
}

const List = ({ index }: ListProps) => {
  const [editingTitle, setEditingTitle] = useState(false);
  const [addingCard, setAddingCard] = useState(false);
  const { lists } = boardInitialData;
  const list = lists?.[index];

  const toggleAddingCard = () => setAddingCard(!addingCard);
  const toggleEditingTitle = () => setEditingTitle(!editingTitle);

  return (
    <div className={styles.list}>
      {editingTitle ? (
        <ListEditor index={index} isEditMode={true} onFinish={toggleEditingTitle} />
      ) : (
        <div className={styles.title} onClick={toggleEditingTitle}>
          {list?.title}
        </div>
      )}
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
