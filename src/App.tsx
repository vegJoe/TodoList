import { useState } from "react";
import { ItodoCard } from "./interfaces";
import { AddCard } from "./components/AddCard";
import { ListAll } from "./components/ListAll";

export function App() {
  
  const [todoCards, setTodoCards] = useState<ItodoCard[]>([]);
  let [listTodos, setListTodos] = useState<boolean>(false);

  const addTodo = (todo: ItodoCard) => {
    setTodoCards([...todoCards, todo]);
    console.log([...todoCards, todo]);
    console.log("in addTodo")
  }

  const handleOnDelete = (removeTodo: ItodoCard): void => {
    setTodoCards(todoCards.filter(todo => removeTodo !== todo))
  }

  const handleOnListAllClick = () => {
    setListTodos((previousVal) => !previousVal);
  }


  return (
    <>
      < AddCard addCard={addTodo} onClick={handleOnListAllClick}/>
      { listTodos &&
        < ListAll todos={todoCards} onClick={handleOnDelete} />
      }
    </>
  );
}
