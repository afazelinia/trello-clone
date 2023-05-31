import styles from './Card.module.css';
import { useState } from 'react';
import { boardInitialData } from '../../../reducers';
import { CardEditor } from '../../../components';

interface CardProps {
  index: number;
  listIndex: number;
}

const Card = ({ listIndex, index }: CardProps) => {
  const [editing, setEditing] = useState(false);
  const { lists } = boardInitialData;
  const card = lists?.[listIndex]?.cards?.[index];

  const startEditing = () => setEditing(true);
  const endEditing = () => setEditing(false);

  return (
    <>
      {editing ? (
        <CardEditor cardIndex={index} listIndex={listIndex} onFinish={endEditing} />
      ) : (
        <div className={styles.card}>
          <div className={styles.icon}>
            <div onClick={startEditing}>✏️</div>
          </div>
          {card?.title}
        </div>
      )}
    </>
  );
};

export default Card;
