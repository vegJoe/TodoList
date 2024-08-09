import { useState } from "react";
import { ItodoCard, ITodoContext } from "./interfaces";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

export function App() {
  
  const [todoCards, setTodoCards] = useState<ItodoCard[]>([]);

  const addCard = (todo: ItodoCard) => {
    setTodoCards([...todoCards, todo]);
  };

  const handleOnDelete = (removeTodo: ItodoCard): void => {
    setTodoCards(todoCards.filter(todo => removeTodo !== todo))
  };

  const handleEditText = (updatedTodo: ItodoCard) => {
    setTodoCards(todoCards.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo));
  };

  const handleSortOnName = () => {
    setTodoCards([...todoCards].sort((a, b) => a.author.localeCompare(b.author)));
  };

  const handleSortOnTimestamp = () => {
    setTodoCards([...todoCards].sort((a, b) => a.id.localeCompare(b.id)));
  };

  const handleShiftLeft = (index: number) => {
    if(index == 0) return;
    const tempTodoCards = [...todoCards];
    [tempTodoCards[index - 1], tempTodoCards[index]] = [tempTodoCards[index], tempTodoCards[index - 1]];
    setTodoCards(tempTodoCards);
  }

  const handleShiftRight = (index: number) => {
    if(index == todoCards.length - 1) return;
    const tempTodoCards = [...todoCards];
    [tempTodoCards[index + 1], tempTodoCards[index]] = [tempTodoCards[index], tempTodoCards[index + 1]];
    setTodoCards(tempTodoCards);
  }

  const todoContext: ITodoContext = {
    todoCards,
    addCard,
    handleOnDelete,
    handleEditText,
    handleSortOnName,
    handleSortOnTimestamp,
    handleShiftLeft,
    handleShiftRight
  };

  return (
    <>
      < Header />
      < Outlet context={todoContext} />
    </>
  );
}
