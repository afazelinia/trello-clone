import { useReducer } from 'react';
import { BoardContext } from '../../../hooks';
import { boardInitialData, boardReducer } from '../../../reducers';

interface Props {
  children: React.ReactNode;
}

const BoardProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(boardReducer, boardInitialData);
  return <BoardContext.Provider value={{ state, dispatch }}>{children}</BoardContext.Provider>;
};

export default BoardProvider;
