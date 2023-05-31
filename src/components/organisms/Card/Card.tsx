import styles from './Card.module.css';
import { useState } from 'react';
import { useBoardContext } from '../../../hooks';
import { CardEditor, Icon } from '../../../components';

interface CardProps {
  index: number;
  listIndex: number;
}

const Card = ({ listIndex, index }: CardProps) => {
  const [editing, setEditing] = useState(false);
  const [hover, setHover] = useState(false);
  const { state } = useBoardContext();
  const { lists } = state;
  const card = lists?.[listIndex]?.cards?.[index];

  const startHover = () => setHover(true);
  const endHover = () => setHover(false);

  const startEditing = () => {
    setHover(false);
    setEditing(true);
  };

  const endEditing = () => {
    setHover(false);
    setEditing(false);
  };

  const startDragging = (e: React.DragEvent<HTMLDivElement>) => {
    const draggingData = { sourceCardIndex: index, sourceListIndex: listIndex };
    e.dataTransfer.setData('text/plain', JSON.stringify(draggingData));
  };

  return (
    <>
      {editing ? (
        <CardEditor cardIndex={index} isEditMode listIndex={listIndex} onFinish={endEditing} />
      ) : (
        <div
          className={styles.card}
          draggable
          onDragStart={startDragging}
          onMouseEnter={startHover}
          onMouseLeave={endHover}
        >
          {hover && (
            <div className={styles.icon}>
              <Icon onClick={startEditing}>✏️</Icon>
            </div>
          )}
          {card?.title}
        </div>
      )}
    </>
  );
};

export default Card;
