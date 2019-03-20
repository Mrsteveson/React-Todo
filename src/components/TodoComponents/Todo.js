import React from 'react';
import './Todo.css';

const Todo = props => {
    return(
        <div>
            <p className = "todoContent" id={props.unfinishedTodo.id}>{props.unfinishedTodo.task}</p>
            {/* onClick here for completed somehow */}
        </div>
    )
}


export default Todo;