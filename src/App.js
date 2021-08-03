import './App.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";

const NestedChild = () => {
    const counter = useSelector(({counter: {value}}) => value)
    const dispatch = useDispatch();

    return (
        <header>
        <h1>{counter}</h1>
        <button onClick={() => {
            dispatch({type: 'INC'})
        }}>inc</button>

        </header>

    )
}

function App() {


    return (

        <div>

            <NestedChild/>
        </div>
    );
}

export default App;
