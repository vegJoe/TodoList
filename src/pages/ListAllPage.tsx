import { TodoCard } from "../components/TodoCard"
import { ReactElement } from "react"
import { useTodoContext } from "../hooks/useTodoContext"
import "../components/ListAll.css"

export function ListAllPage(): ReactElement {
    const { todoCards } = useTodoContext();

    return (
        <div className="todos">
            {todoCards.map((todo, index) => (
                <TodoCard key={todo.id} todoCard={todo} index={index}/>
            ))}
        </div>
    )
}