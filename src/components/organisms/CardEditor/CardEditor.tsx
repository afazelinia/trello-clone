import styles from './CardEditor.module.css';
import React, { useState } from 'react';
import { EditButtons, TextField } from '../../../components';
import { useBoardContext } from '../../../hooks';

interface CardEditorProps {
  listIndex: number;
  cardIndex?: number | null;
  isEditMode: boolean;
  onFinish?: () => void;
}

const CardEditor = ({ listIndex, cardIndex, isEditMode, onFinish }: CardEditorProps) => {
  const { state } = useBoardContext();
  const { lists } = state;
  const [title, setTitle] = useState<string>(lists?.[listIndex]?.cards?.[cardIndex]?.title || '');

  const changeTitle = (event: React.ChangeEvent<HTMLTextAreaElement>) => setTitle(event.target.value);
  const finishEdit = () => {
    setTitle('');
    onFinish?.();
  };

  return (
    <>
      <div className={styles.editing}>
        <TextField placeholder={'Enter card title...'} value={title} onChange={changeTitle} />
      </div>
      <EditButtons
        onSave={() => alert('save card')}
        onDelete={isEditMode ? () => alert('delete card') : undefined}
        onCancel={finishEdit}
      />
    </>
  );
};

export default CardEditor;
