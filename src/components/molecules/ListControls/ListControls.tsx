import styles from './ListControls.module.css';
import { Icon } from '../../../components';

interface ListControlsProps {
  onDelete: Function;
}

// todo hide delete button in list editor buttons
const ListControls = ({ onDelete }: ListControlsProps) => (
  <div className={styles.icons}>
    <Icon onClick={() => onDelete()}>❌</Icon>
  </div>
);

export default ListControls;
