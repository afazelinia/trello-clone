import styles from './List.module.css';
import { useState } from 'react';
import { Card, CardEditor, ListEditor } from '../../../components';
import { useBoardContext } from '../../../hooks';
import { ActionTypes } from '../../../interfaces';

interface ListProps {
  index: number;
}

const List = ({ index }: ListProps) => {
  const [editingTitle, setEditingTitle] = useState(false);
  const [addingCard, setAddingCard] = useState(false);
  const { state, dispatch } = useBoardContext();
  const { lists } = state;
  const list = lists?.[index];

  const toggleAddingCard = () => setAddingCard(!addingCard);
  const toggleEditingTitle = () => setEditingTitle(!editingTitle);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const draggingData = e.dataTransfer.getData('text/plain');
    try {
      const { sourceCardIndex, sourceListIndex } = JSON.parse(draggingData);
      dispatch({
        type: ActionTypes.MOVE_CARD,
        payload: {
          sourceListIndex: sourceListIndex,
          targetListIndex: index,
          oldCardIndex: sourceCardIndex,
          newCardIndex: 0, // todo fix this
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.list} onDragOver={handleDragOver} onDrop={handleDrop}>
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
