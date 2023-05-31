import styles from './CardEditor.module.css';
import React, { useState } from 'react';
import { EditButtons, TextField } from '../../../components';
import { ActionTypes } from '../../../interfaces';
import { useBoardContext } from '../../../hooks';

interface CardEditorProps {
  listIndex: number;
  cardIndex?: number | null;
  isEditMode: boolean;
  onFinish?: () => void;
}

const CardEditor = ({ listIndex, cardIndex, isEditMode, onFinish }: CardEditorProps) => {
  const { state, dispatch } = useBoardContext();
  const { lists } = state;
  const [title, setTitle] = useState<string>(lists?.[listIndex]?.cards?.[cardIndex]?.title || '');

  const changeTitle = (event: React.ChangeEvent<HTMLTextAreaElement>) => setTitle(event.target.value);
  const finishEdit = () => {
    setTitle('');
    onFinish?.();
  };

  const saveCard = () => {
    finishEdit();
    if (isEditMode) {
      dispatch({
        type: ActionTypes.EDIT_CARD,
        payload: { listIndex, index: cardIndex, title },
      });
    } else {
      dispatch({
        type: ActionTypes.ADD_CARD,
        payload: { listIndex, title },
      });
    }
  };

  const deleteCard = () => {
    if (window.confirm('Are you sure to delete this card?')) {
      dispatch({
        type: ActionTypes.DELETE_CARD,
        payload: { listIndex, index: cardIndex },
      });
    }
  };

  return (
    <>
      <div className={styles.editing}>
        <TextField placeholder={'Enter card title...'} value={title} onChange={changeTitle} />
      </div>
      <EditButtons onSave={saveCard} onDelete={isEditMode ? deleteCard : undefined} onCancel={finishEdit} />
    </>
  );
};

export default CardEditor;
