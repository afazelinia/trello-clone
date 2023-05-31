import { Action, ActionTypes, BoardInterface } from '../../interfaces';
import { getUniqueId, moveItem, overrideListAtIndex, removeItemAtIndex } from '../../utils';

const boardReducer = (state: BoardInterface, action: Action): BoardInterface => {
  const { lists } = state;
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.ADD_LIST: {
      const { title } = payload;
      return { ...state, lists: [...lists, { id: getUniqueId(), title, cards: [] }] };
    }

    case ActionTypes.DELETE_LIST: {
      const { index } = payload;
      return { ...state, lists: removeItemAtIndex(lists, index) };
    }

    case ActionTypes.EDIT_LIST_TITLE: {
      const { index, title } = payload;
      const newList = { ...lists[index], title };
      return { ...state, lists: overrideListAtIndex(lists, newList, index) };
    }

    case ActionTypes.MOVE_LIST: {
      const { oldListIndex, newListIndex } = payload;
      return { ...state, lists: moveItem(lists, oldListIndex, newListIndex) };
    }

    case ActionTypes.ADD_CARD: {
      const { listIndex, title } = payload;
      const newList = { ...lists[listIndex], cards: [...lists[listIndex].cards, { id: getUniqueId(), title }] };
      return { ...state, lists: overrideListAtIndex(lists, newList, listIndex) };
    }

    case ActionTypes.DELETE_CARD: {
      const { listIndex, index } = payload;
      const newList = { ...lists[listIndex], cards: removeItemAtIndex(lists[listIndex].cards, index) };
      return { ...state, lists: overrideListAtIndex(lists, newList, listIndex) };
    }

    case ActionTypes.EDIT_CARD: {
      const { listIndex, index, title } = payload;
      const newCard = { ...lists[listIndex].cards[index], title };
      const newList = { ...lists[listIndex], cards: overrideListAtIndex(lists[listIndex].cards, newCard, index) };
      return { ...state, lists: overrideListAtIndex(lists, newList, listIndex) };
    }

    case ActionTypes.MOVE_CARD:
    default: {
      return state;
    }
  }
};

export default boardReducer;
