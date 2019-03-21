import React from 'react';
import './Todo.css';

const Todo = props => {
    return(
        <div>
            <p 
            className = "todoContent"
            onClick = {() => props.finished(props.todoList.id)}
            >
            {props.todoList.task}</p>
        </div>
    )
}


export default Todo;