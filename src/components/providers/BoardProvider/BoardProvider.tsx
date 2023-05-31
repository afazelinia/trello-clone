import { useReducer } from 'react';
import { Action, BoardInterface } from '../../../interfaces';
import { BoardContext, useLocalStorage } from '../../../hooks';
import { boardInitialData as initialData, boardReducer } from '../../../reducers';

interface Props {
  children: React.ReactNode;
}

const BoardProvider = ({ children }: Props) => {
  const [boardStorage, setBoardStorage] = useLocalStorage({ key: 'BoardState', initialData });
  const [state, dispatch] = useReducer((board: BoardInterface, action: Action) => {
    const newState = boardReducer(board, action);
    setBoardStorage(newState);
    return newState;
  }, boardStorage);

  return <BoardContext.Provider value={{ state, dispatch }}>{children}</BoardContext.Provider>;
};

export default BoardProvider;
