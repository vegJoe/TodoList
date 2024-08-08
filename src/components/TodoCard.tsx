import { useState } from "react";
import { ICardStructure } from "../interfaces";
import "./TodoCard.css"
import { useTodoContext } from "../hooks/useTodoContext";

export const TodoCard = ({ todoCard }: ICardStructure) => {
    
    const { handleOnDelete } = useTodoContext();
    const [isDone, setIsDone] = useState(todoCard.done);

    const handleOnChange = () => {
        const newDoneState = !isDone;
        setIsDone(newDoneState);
        todoCard.done = newDoneState;
    };

    return (
        <article className="todoCard">
            <div className="cardTop">
                <p className="title">Title: {todoCard.title}</p>
                <button type="button" className="delete" onClick={() => handleOnDelete(todoCard)}>X</button>

            </div>
            <p className="author">Author: {todoCard.author}</p>

            <div className="todoText">{todoCard.todoText}</div>
            <div className="checkboxDiv">
                <p className="done">Done: </p>
                <input type="checkbox" className="taskDone" name="taskDone" value={String(isDone)} onChange={handleOnChange} checked={isDone}/>
            </div>
            <p className="timestamp">Creation Date: {todoCard.id}</p>
        </article>
    )
}