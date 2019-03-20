import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

const todoListArray = [
  {
    task: 'Learn React',
    id: 1528817077286,
    completed: false
  },

  {
    task: 'Dont go crazy',
    id: 1528817084358,
    completed: false
  },

  {
    task: 'Walk Jolie',
    id: 1528817027272,
    completed: false
  }
];



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoList: todoListArray,
      todoText: '',
    };
  }

  handleChange = event => {
    // console.log('event', event.target);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  updateList = event => {
    event.preventDefault();
    // const addNewTodo = {
    //   todoText: this.state.todoText,
    // };

    this.setState({
      todoList: [
        ...this.state.todoList,
        {task: this.state.todoText,
        id: Date.now(),
        completed: false,}
      ]
    });

  }

  render() {
    return (
      <div className = 'myApp'>
        <h2>Hello and Welcome to Patrick's Todo App!</h2>
        <TodoList todoList = {this.state.todoList}/>
        <TodoForm 
          addNew = {this.addNew}
          todoText = {this.state.todoText}
          handleChange = {this.handleChange}
        />
      </div>
    );
  };
};

export default App;
