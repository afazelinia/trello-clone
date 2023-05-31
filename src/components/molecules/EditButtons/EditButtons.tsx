import styles from './EditButtons.module.css';
import { Button } from '../../../components';

interface EditButtonsProps {
  onSave: () => void;
  onCancel: () => void;
  onDelete?: () => void | null;
}

const EditButtons = ({ onSave, onDelete, onCancel }: EditButtonsProps) => (
  <div className={styles.buttons}>
    <Button type='save' onClick={onSave}>
      Save
    </Button>
    {onDelete && (
      <Button type='delete' onClick={onDelete}>
        Delete
      </Button>
    )}
    <Button type='cancel' onClick={onCancel}>
      Cancel
    </Button>
  </div>
);

export default EditButtons;
