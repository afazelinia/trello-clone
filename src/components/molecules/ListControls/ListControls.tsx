import styles from './ListControls.module.css';
import { Icon } from '../../../components';

interface ListControlsProps {
  onMoveLeft: Function;
  onMoveRight: Function;
}

const ListControls = ({ onMoveLeft, onMoveRight }: ListControlsProps) => (
  <div className={styles.icons}>
    <Icon onClick={() => onMoveLeft()}>⬅️️</Icon>
    <Icon onClick={() => onMoveRight()}>➡️</Icon>
  </div>
);

export default ListControls;
