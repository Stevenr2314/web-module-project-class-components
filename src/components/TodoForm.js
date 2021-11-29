import React from "react";

const TodoForm = props => {
    return(
        <form onSubmit={props.handleSubmit}>
            <label>Enter New Todo: 
                <input 
                type='text'
                name='todo'
                placeholder='Todo...'
                value={props.form.todo}
                onChange={event => props.handleChange(event)}/>
            </label>
            <button type='submit'>Submit</button>
            <button onClick={props.handleClear}>Clear Completed</button>
        </form>
    )
}

export default TodoForm