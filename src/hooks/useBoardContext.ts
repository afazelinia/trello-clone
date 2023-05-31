import { createContext, useContext } from 'react';
import { BoardContextProps } from '../interfaces';

export const BoardContext = createContext<BoardContextProps | null>(null);

export const useBoardContext = (): BoardContextProps => {
  const contextValue = useContext(BoardContext);
  if (!contextValue) {
    throw new Error('context has not been provided');
  }
  return contextValue;
};
