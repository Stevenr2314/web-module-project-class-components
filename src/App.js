import React from 'react';
import { ReactDOM } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [],
      form: {todo: ""},
      checkedTodo: []
    };
  }
  handleChange = event =>{
    let todo = {[event.target.name]: event.target.value}
    this.setState({form: todo})
  }

  handleSubmit = event =>{
    event.preventDefault();
    let newTodo = this.state.form.todo
    this.setState({todoList: [...this.state.todoList, newTodo]})
    this.setState({form: {todo: ""}})
  }
  handleClear = () =>{
    const {todoList, checkedTodo} = this.state
    let remTodos = todoList.filter(todo => !checkedTodo.includes(todo))
    this.setState({todoList: remTodos})
    this.setState({checkedTodo: []})
  }
  handleTodoClick = event =>{
    let todoText = event.target.innerText
    console.log(event.target)
    event.target.classList.add('crossed')
    if(this.state.checkedTodo.includes(todoText)){
      let newChecked = this.state.checkedTodo.filter(todo => !todo===todoText)
      this.setState({checkedTodo: newChecked})
    } else {
      this.setState({checkedTodo: [...this.state.checkedTodo, todoText]})
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to my Todo App!</h2>
        <TodoList handleTodoClick={this.handleTodoClick} todoList={this.state.todoList}/>
        <TodoForm 
          todoList={this.state.todoList}
          form={this.state.form}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleClear={this.handleClear}/>
      </div>
    );
  }
}

export default App;
