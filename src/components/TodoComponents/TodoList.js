import React from 'react';
import './Todo.css';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className = 'todoList'>
            {props.todoList.map(myTodo => (
                <Todo 
                    todoList = {myTodo}
                    finished = {props.finished}
                    key = {myTodo.id}
                />
            ))}
        </div>
    );
};


export default TodoList;
// your components will all go in this `component` directory.