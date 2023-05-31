import { BoardInterface } from '../../interfaces';
import { getUniqueId } from '../../utils';

const boardInitialData: BoardInterface = {
  lists: [
    {
      id: getUniqueId(),
      title: 'To Do',
      cards: [
        { id: getUniqueId(), title: 'Task 1' },
        { id: getUniqueId(), title: 'Task 2' },
        { id: getUniqueId(), title: 'Task 3' },
      ],
    },
    {
      id: getUniqueId(),
      title: 'Doing',
      cards: [{ id: getUniqueId(), title: 'Task 4' }],
    },
    {
      id: getUniqueId(),
      title: 'Done',
      cards: [
        { id: getUniqueId(), title: 'Task 5' },
        { id: getUniqueId(), title: 'Task 6' },
      ],
    },
  ],
};

export default boardInitialData;
