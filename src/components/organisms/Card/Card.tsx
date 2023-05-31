import styles from './Card.module.css';
import { boardInitialData } from '../../../reducers';

interface CardProps {
  index: number;
  listIndex: number;
}

const Card = ({ listIndex, index }: CardProps) => {
  const { lists } = boardInitialData;
  const card = lists?.[listIndex]?.cards?.[index];

  return <div className={styles.card}>{card?.title}</div>;
};

export default Card;
