const moveItem = <T>(array: T[], fromIndex: number, toIndex: number): T[] => {
  const newArray = [...array];
  const [item] = newArray.splice(fromIndex, 1);
  newArray.splice(toIndex, 0, item);
  return newArray;
};

export default moveItem;
