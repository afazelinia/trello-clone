import { BoardInterface } from './BoardInterface';

export enum ActionTypes {
  ADD_LIST = 'ADD_LIST',
  DELETE_LIST = 'DELETE_LIST',
  EDIT_LIST_TITLE = 'EDIT_LIST_TITLE',
  MOVE_LIST = 'MOVE_LIST',
  ADD_CARD = 'ADD_CARD',
  DELETE_CARD = 'DELETE_CARD',
  EDIT_CARD = 'EDIT_CARD',
  MOVE_CARD = 'MOVE_CARD',
}

export type Action =
  | {
      type: ActionTypes.ADD_LIST;
      payload: { title: string };
    }
  | {
      type: ActionTypes.DELETE_LIST;
      payload: { index: number };
    }
  | {
      type: ActionTypes.EDIT_LIST_TITLE;
      payload: { index: number; title: string };
    }
  | {
      type: ActionTypes.MOVE_LIST;
      payload: { oldListIndex: number; newListIndex: number };
    }
  | {
      type: ActionTypes.ADD_CARD;
      payload: { listIndex: number; title: string };
    }
  | {
      type: ActionTypes.DELETE_CARD;
      payload: { listIndex: number; index: number };
    }
  | {
      type: ActionTypes.EDIT_CARD;
      payload: { listIndex: number; index: number; title: string };
    }
  | {
      type: ActionTypes.MOVE_CARD;
      payload: {};
    };

export interface BoardContextProps {
  state: BoardInterface;
  dispatch: React.Dispatch<Action>;
}
