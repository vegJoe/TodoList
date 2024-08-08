import { useState } from "react";
import { ItodoCard, ITodoContext } from "./interfaces";
import { AddCardPage } from "./pages/AddCardPage";
import { ListAllPage } from "./pages/ListAllPage";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

export function App() {
  
  const [todoCards, setTodoCards] = useState<ItodoCard[]>([]);

  const addCard = (todo: ItodoCard) => {
    setTodoCards([...todoCards, todo]);
    console.log([...todoCards, todo]);
    console.log("in addTodo")
  }

  const handleOnDelete = (removeTodo: ItodoCard): void => {
    setTodoCards(todoCards.filter(todo => removeTodo !== todo))
  }

  const todoContext: ITodoContext = {
    todoCards,
    addCard,
    handleOnDelete
  }



  return (
    <>
      < Header />
      < Outlet context={todoContext} />
    </>
  );
}
