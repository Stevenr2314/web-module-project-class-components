import React from "react";

const TodoList = props => {
    props.todoList.forEach(todo => <div>{todo}</div>)
}

export default TodoList