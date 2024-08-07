import React, {useState} from "react";
import { INewCard, ItodoCard } from "../interfaces";
import "./AddCard.css"


export const AddCard = ({ addCard, onClick }: INewCard ) => {

    let [nextId, setNextId] = useState<string>();
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [todoText, setTodoText] = useState<string>('');
    const [done, setDone] = useState<boolean>(false);


    nextId = new Date().toString();

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
    const newTodoCard: ItodoCard = {
        id: nextId,
        title,
        author,
        todoText,
        done: false
    };

        console.log(newTodoCard);

    addCard(newTodoCard);
    Clear();
    }

    function Clear() {
        setTitle('');
        setTodoText('');
        setAuthor('');
    }

    return (
        <form action="" className="newTodo" onSubmit={handleOnSubmit}>
            <div className="addTodoTitle">
                <label htmlFor="inputTitle" className="title">Title:</label>
                <input 
                type="text"
                id="inputTitle"
                className="inputTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="addTodoAuthor">
                <label htmlFor="inputAuthor" className="author">Author:</label>
                <input 
                type="text"
                id="inputAuthor"
                className="inputAuthor"
                value={author}
                onChange={(e) => setAuthor(e.target.value)} />
            </div>

            <div className="descriptionDiv">
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    className="description"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    >
                </textarea>
            </div>
            <div className="formButtons">
                <button type="submit" className="submit">New Todo</button>
                <button type="button" className="listAll" onClick={() => onClick()}>List todo's</button>
            </div>
        </form>
    )
}