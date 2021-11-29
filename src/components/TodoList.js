import React from "react";

const TodoList = props => {
    if (props.todoList.length < 1){
          return(<div>There are no todo items</div>) 
    }
    else{
        return(props.todoList.map(todo => <div>{todo}</div>))
     }
    
    }

export default TodoList