import { IListAll } from "../interfaces"
import { TodoCard } from "../components/TodoCard"
import { ReactElement } from "react"
import { useTodoContext } from "../hooks/useTodoContext"
import "../components/ListAll.css"

export function ListAllPage(): ReactElement {
    const { todoCards } = useTodoContext();

    console.log("in list all")
    console.log(todoCards)

    return (
        <div className="todos">
            {todoCards.map((todo) => (
                <TodoCard key={todo.id} todoCard={todo} />
            ))}
        </div>
    )
}