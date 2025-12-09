import React, { useReducer } from 'react'

function reducer(state, action) {
    switch(action.type) {
        case "add":
            return [...state, {id: Date.now(), text: action.payload}];
        case "delete":
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}

const ToDoUseReducer = () => {

    const [todos, dispatch] = useReducer(reducer , []);

  return (
    <>
        <button onClick={
            () => dispatch({ type : "add", payload : "Learn React"})
        }>
            Add Todo
        </button>
        {todos.map(todo => (
            <p key={todo.id}>
                {todo.text}
                <button onClick={() => dispatch({ type : "delete", payload : todo.id})}>
                    delete
                </button>
            </p>
        ))}
    </>
  )
}

export default ToDoUseReducer
