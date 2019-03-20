import React from 'react';
import './Todo.css';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className = 'todoList'>
            {props.todoList.map(myTodo => (
                <Todo 
                    key = {myTodo.id}
                    unfinishedTodo = {myTodo}
                />
            ))}
        </div>
    );
};


export default TodoList;
// your components will all go in this `component` directory.