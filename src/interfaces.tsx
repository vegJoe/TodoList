export interface ItodoCard {
    id: string;
    title: string;
    author: string;
    todoText: string;
    done: boolean;
}

export interface ICardStructure {
    todoCard: ItodoCard;
}

export interface INewCard {
    addCard: (todoCards: ItodoCard) => void;
}

export interface IListAll {
    onClick: (todo: ItodoCard) => void;
    todos: ItodoCard[];
}

export interface ITodoContext {
    todoCards: ItodoCard[];
    addCard: (todoCards: ItodoCard) => void;
    handleOnDelete: (todo: ItodoCard) => void;
    handleEditText: (updatedTodo: ItodoCard) => void;
    handleSortOnName: () => void;
    handleSortOnTimestamp: () => void;
}