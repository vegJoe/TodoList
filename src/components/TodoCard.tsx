import { useState } from "react";
import { ICardStructure } from "../interfaces";
import "./TodoCard.css"
import { useTodoContext } from "../hooks/useTodoContext";

export const TodoCard = ({ todoCard }: ICardStructure) => {
    
    const { handleOnDelete, handleEditText, handleSortOnName, handleSortOnTimestamp } = useTodoContext();
    const [isDone, setIsDone] = useState(todoCard.done);
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todoCard.todoText);


    const handleOnChange = () => {
        const newDoneState = !isDone;
        setIsDone(newDoneState);
        todoCard.done = newDoneState;
    };

    const handleSaveEdit = () => {

        handleEditText({
            ...todoCard,
            todoText: editedText,
        });
        setIsEditing(false);
    };

    return (
        <article className="todoCard">

            <div className="cardTop">
                <p className="title">Title: {todoCard.title}</p>
                <button type="button" className="delete" onClick={() => handleOnDelete(todoCard)}>X</button>

            </div>

            <p className="author" onClick={() => handleSortOnName()}>Author: {todoCard.author}</p>

            <div className="todoText">
                {isEditing ? (
                    <textarea
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        onBlur={handleSaveEdit}
                        autoFocus
                    />
                ) : (
                    <div onClick={() => setIsEditing(true)}>
                        {todoCard.todoText}
                    </div>
                )}
            </div>

            <div className="checkboxDiv">
                <p className="done">Done: </p>
                    <input 
                    type="checkbox" 
                    className="taskDone" 
                    name="taskDone" 
                    value={String(isDone)} 
                    onChange={handleOnChange} 
                    checked={isDone}/>
            </div>

            <p className="timestamp" onClick={() => handleSortOnTimestamp()}>Creation Date: {todoCard.id}</p>

        </article>
    )
}
