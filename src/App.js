import './App.css';
import React, {useReducer} from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'INC_A':
            console.log('a incs');
            return {...state, a: state.a + action.payload};
        case 'INC_B':
            console.log('b incs')
            return {...state, b: state.b + action.payload};

        default:
            return {...state};

    }
}

function App() {

    let [state, dispatch] = useReducer(reducer, {a: 0, b: 0});


    return (
        <div>
            <button onClick={() => dispatch({type: 'INC_A', payload: 1})}> Click me A {state.a}</button>
            <button onClick={() => dispatch({type: 'INC_B', payload: 2})}> Click me B {state.b}</button>

        </div>
    );
}

export default App;
