import { useReducer } from "react";

const initialState = {
    num1: "",
    num2: "",
    operator: null,
    result: null
};

function reducer(state, action) {
    switch (action.type) {

        case "SET_NUM1":
            return { ...state, num1: action.payload };

        case "SET_NUM2":
            return { ...state, num2: action.payload };

        case "SET_OPERATOR":
            return { ...state, operator: action.payload };

        case "CALCULATE": {
            const n1 = parseFloat(state.num1);
            const n2 = parseFloat(state.num2);
            const op = state.operator;

            if (isNaN(n1) || isNaN(n2) || !op) return state;

            let result = 0;

            // precedence is automatically handled 
            // because only 1 operator exists between 2 numbers
            switch (op) {
                case "+":
                    result = n1 + n2;
                    break;
                case "-":
                    result = n1 - n2;
                    break;
                case "*":
                    result = n1 * n2;
                    break;
                case "/":
                    result = n2 === 0 ? "Cannot divide by zero" : n1 / n2;
                    break;
                default:
                    return state;
            }

            return { ...state, result };
        }

        case "RESET":
            return initialState;

        default:
            return state;
    }
}

export default function Calculator() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ padding: 20, fontFamily: "sans-serif" }}>
            <h2>useReducer Calculator</h2>

            <input
                type="number"
                placeholder="First Number"
                value={state.num1}
                onChange={(e) =>
                    dispatch({ type: "SET_NUM1", payload: e.target.value })
                }
            />

            <select
                onChange={(e) =>
                    dispatch({ type: "SET_OPERATOR", payload: e.target.value })
                }
            >
                <option value="">Operator</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>

            <input
                type="number"
                placeholder="Second Number"
                value={state.num2}
                onChange={(e) =>
                    dispatch({ type: "SET_NUM2", payload: e.target.value })
                }
            />

            <button onClick={() => dispatch({ type: "CALCULATE" })}>=</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Clear</button>

            <h3>Result: {state.result !== null ? state.result : "--"}</h3>
        </div>
    );
}
