import { IListAll } from "../interfaces"
import { TodoCard } from "./TodoCard"

export const ListAll = ({todos, onClick}: IListAll) => {


    return (
        <div className="todos">
            {todos.map((todo) => (
                <TodoCard key={todo.id} todoCard={todo} onClick={onClick}/>
            ))}
        </div>
    )
}