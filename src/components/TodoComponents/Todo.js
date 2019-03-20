import React from 'react';
import './Todo.css';

const Todo = props => {
    return(
        <div>
            <p className = "todoContent" id={props.unfinished.id} onClick = {props.finished}>{props.unfinished.task}</p>
        </div>
    )
}


export default Todo;