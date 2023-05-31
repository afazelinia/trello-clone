import styles from './CardEditor.module.css';
import React, { useState } from 'react';
import { EditButtons, TextField } from '../../../components';
import { boardInitialData } from '../../../reducers';

interface CardEditorProps {
  listIndex: number;
  cardIndex?: number | null;
  onFinish?: () => void;
}

const CardEditor = ({ listIndex, cardIndex, onFinish }: CardEditorProps) => {
  const { lists } = boardInitialData;
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
      <EditButtons onSave={() => alert('save card')} onDelete={() => alert('delete card')} onCancel={finishEdit} />
    </>
  );
};

export default CardEditor;
