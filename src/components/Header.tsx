import { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./Header.css"


export function Header(): ReactElement {
    return (
      <header className="header">
        <h1 className="logo">Todo App</h1>
        <div className="links">
          <Link to="/list-all" className="link">
            Todo's
          </Link>
          <Link to="/add-todo" className="link">
            New Todo
          </Link>
        </div>
      </header>
    );
  }
  