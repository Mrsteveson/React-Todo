import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
    <div>
        <form>
            <input 
                className = 'todoForm'
                type = 'text'
                name = 'todoText'
                placeholder = 'Next!'
                value = {props.todoText}
                onChange = {props.handleChange}
            />

            <button onClick = {props.updateList}>Add Todo</button>
            <button>Clear Completed</button>     
        </form>
    </div>
  );
};


export default TodoForm;