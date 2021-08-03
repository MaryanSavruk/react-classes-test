import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialValue = {
    counter: {
        value: 0
    }
}

const reducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'INC': {
            return {
                ...state,
                counter: {
                    value: state.counter.value + 1
                }
            }
        }
        default:
            return state;
    }
}

const store = createStore(reducer);

const INCREMENT_ACTION = {
    type: 'INC'
}
store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch(INCREMENT_ACTION);
// store.dispatch(INCREMENT_ACTION);
// store.dispatch(INCREMENT_ACTION);
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
