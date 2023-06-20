import React, { Component } from 'react';
import Todos from '../component/Todos';
import AddTodo from '../component/AddTodo';

class Home extends Component {
  state = {
    todos: []
  }
  
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    });
  }
  
  addTodo = (todo) => {
    const exists = this.state.todos.find(t => t.content === todo.content);
    if (!exists) {
      todo.id = Math.random();
      let todos = [...this.state.todos, todo];
      this.setState({
        todos: todos
      });
    }
  }
  
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default Home;
