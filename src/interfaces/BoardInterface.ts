interface CardInterface {
  id: string;
  title: string;
}

interface ListInterface {
  id: string;
  title: string;
  cards: CardInterface[];
}

export interface BoardInterface {
  lists: ListInterface[];
}
