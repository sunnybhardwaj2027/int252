import React from 'react'
import { useReducer } from 'react'

const initialState = { count : 0 };

function reducer(state, action){
    switch(action.type) {
        case "Increment":
            return { count: state.count + 1};
        
        case "Decrement":
            return { count: state.count -1};

        case "Reset":
            return initialState;

        default: 
            return state;
    }
}

const CounterWithuseReducer = () => {
    const [state, dispatch] = useReducer(reducer , initialState);


  return (
    <>
        <h1>{state.count}</h1>
        <button style={{padding:"20px" ,margin:"20px"}} onClick={() => dispatch({ type : "Increment"})}>+</button>
        <button style={{padding:"20px" ,margin:"20px"}} onClick={() => dispatch({ type : "Decrement"})}>-</button>
        <button style={{padding:"20px" ,margin:"20px"}} onClick={() => dispatch({ type: "Reset"})}>Reset</button>
    </>
  )
}

export default CounterWithuseReducer
