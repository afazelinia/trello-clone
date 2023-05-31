import styles from './ListEditor.module.css';
import React, { useState } from 'react';
import { useBoardContext } from '../../../hooks';
import { EditButtons, ListControls, TextField } from '../../../components';
import { ActionTypes } from '../../../interfaces';

interface ListEditorProps {
  index?: number;
  isEditMode: boolean;
  onFinish?: () => void;
}

const ListEditor = ({ index, isEditMode, onFinish }: ListEditorProps) => {
  const { state, dispatch } = useBoardContext();
  const { lists } = state;
  const [title, setTitle] = useState<string>(lists?.[index]?.title || '');

  const changeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => setTitle(e.target.value);

  const deleteList = () => {
    if (window.confirm('Are you sure to delete this list?')) {
      dispatch({
        type: ActionTypes.DELETE_LIST,
        payload: { index },
      });
    }
  };

  const saveList = () => {
    onFinish?.();
    if (isEditMode) {
      dispatch({
        type: ActionTypes.EDIT_LIST_TITLE,
        payload: { index, title },
      });
    } else {
      dispatch({
        type: ActionTypes.ADD_LIST,
        payload: { title },
      });
    }
  };

  const moveList = (newListIndex: number) => {
    if (newListIndex >= 0 && newListIndex < lists.length) {
      dispatch({
        type: ActionTypes.MOVE_LIST,
        payload: {
          oldListIndex: index,
          newListIndex,
        },
      });
    }
  };

  return (
    <>
      <div className={styles.editing}>
        <TextField placeholder='Enter list title...' value={title} onChange={changeTitle} />
        {isEditMode && <ListControls onMoveLeft={() => moveList(index - 1)} onMoveRight={() => moveList(index + 1)} />}
      </div>
      <EditButtons onSave={saveList} onCancel={onFinish} onDelete={isEditMode ? deleteList : undefined} />
    </>
  );
};

export default ListEditor;
