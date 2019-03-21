import React from 'react';
import './Todo.css';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className = 'todoList'>
            {props.todoList.map(myTodo => (
                <Todo 
                    key = {myTodo.id}
                    todoList = {myTodo}
                    finished = {props.finished}
                />
            ))}
        </div>
    );
};


export default TodoList;
// your components will all go in this `component` directory.