import styles from './ListEditor.module.css';
import React, { useState } from 'react';
import { boardInitialData } from '../../../reducers';
import { EditButtons, ListControls, TextField } from '../../../components';

interface ListEditorProps {
  index?: number;
  isEditMode: boolean;
  onFinish?: () => void;
}

const ListEditor = ({ index, isEditMode, onFinish }: ListEditorProps) => {
  const { lists } = boardInitialData;
  const [title, setTitle] = useState<string>(lists?.[index]?.title || '');

  const changeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => setTitle(e.target.value);

  return (
    <>
      <div className={styles.editing}>
        <TextField placeholder='Enter list title...' value={title} onChange={changeTitle} />
        {isEditMode && <ListControls onDelete={() => alert('delete list')} />}
      </div>
      <EditButtons
        onSave={() => alert('save list')}
        onCancel={onFinish}
        onDelete={isEditMode ? () => alert('delete list') : undefined}
      />
    </>
  );
};

export default ListEditor;
