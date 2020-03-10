import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';


const initState = { userInput: "Test", username: "Gingertonic"}

const myReducer = (state=initState, action) => {
    switch(action.type){
        case "UPDATE_WORD":
            return { ...state, userInput: action.payload }
        case "UPDATE_USER":
            return { ...state, username: action.payload }
        default:
            return state;
    }
}

const myStore = createStore(myReducer, devToolsEnhancer())

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
