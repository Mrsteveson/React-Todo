import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
    <div className = 'todoForm'>
        <form onSubmit = {props.updateList}>
            <input 
                className = 'todoInput'
                type = 'text'
                name = 'todoText'
                placeholder = 'Next!'
                value = {props.todoText}
                onChange = {props.handleChange}
            />

            <button>Add Todo</button>
            <button onClick = {props.clearCompleted}>Clear Completed</button>     
        </form>
    </div>
  );
};


export default TodoForm;