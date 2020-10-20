import React from 'react';
import '../Styles/TodoList.css';

function Todos(props) {
    return (
        <>
            <li>
                <div className="list">
                    <div><input type="checkbox" id={props.index} onChange={() => { props.statusTodo(props.todos.id) }} checked={props.todos.status} /></div>
                    <div className="text"><p>{props.todos.todoText}</p></div>
                    <span className={props.todos.status ? "greendot" : "reddot"}></span>
                </div>
                <div className="hr-element"><hr /></div>
            </li>
        </>
    )
}

export default Todos;
