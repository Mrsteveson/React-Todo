import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
    <div className = 'todoForm'>
        <form>
            <input 
                className = 'todoInput'
                type = 'text'
                name = 'todoText'
                placeholder = 'Next!'
                value = {props.todoText}
                onChange = {props.handleChange}
            />

            <button onClick = {props.updateList}>Add To-Do</button>
            <button onClick = {props.clearCompleted}>Clear Completed</button>     
        </form>
    </div>
  );
};


export default TodoForm;