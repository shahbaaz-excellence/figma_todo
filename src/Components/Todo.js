import React, { useState } from 'react'
import { MdAddCircleOutline } from 'react-icons/md';
import '../Styles/Todo.css';
import Form from './Form';
import Todos from './TodoList';

function Todo() {

    const [todoList, setTodoList] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //  add todo

    const addTodo = (todoInput) => {
        const newTodoList = [...todoList, {
            status: false,
            todoText: todoInput,
            id: Math.random()
        }];
        setTodoList(newTodoList);
    }

    //  todo status change


    const todoStatus = (todoId) => {
        console.log(todoId);
        const newTodos = todoList.map(item => {
            if (item.id == todoId) {
                return { ...item, status: !item.status }
            } else {
                return item;
            }
        })
        setTodoList(newTodos);
    }


    return (
        <div className="maindiv">
            <div className="header">
                <h1>Today</h1>
                <span className="addbutton"><MdAddCircleOutline color="rgb(50, 97, 167)" size="25px" onClick={handleShow}/></span>
            </div>

            <Form 
            handleClose = {handleClose}
            handleShow = {handleShow}
            show={show}
            addTodo={addTodo}
            />
            <div className="content">
                <div>
                    <ul>
                        {todoList.map((todo, id) => {
                            return <Todos
                                key={id}
                                index={id}
                                todos={todo}
                                statusTodo={todoStatus}
                            />
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Todo;
