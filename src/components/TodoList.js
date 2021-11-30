import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    if (props.todoList.length < 1){
          return(<div>There are no todo items</div>) 
    }
    else{
        return(props.todoList.map(todo => <Todo handleTodoClick={props.handleTodoClick} todo={todo}/>))
     }
    
    }

export default TodoList