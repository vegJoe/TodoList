export interface ItodoCard {
    id: string;
    title: string;
    author: string;
    todoText: string;
    done: boolean;
}

export interface ICardStructure {
    onClick: (todo: ItodoCard) => void;
    todoCard: ItodoCard;
}

export interface INewCard {
    onClick: () => void;
    addCard: (todoCards: ItodoCard) => void;
}

export interface IListAll {
    onClick: (todo: ItodoCard) => void;
    todos: ItodoCard[]
}