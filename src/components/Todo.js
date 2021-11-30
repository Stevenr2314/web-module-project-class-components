import React from "react";
import "./Todo.css"

const Todo = props => <h3 onClick={props.handleTodoClick}>{props.todo}</h3>

export default Todo