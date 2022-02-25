import {createStore, combineReducers} from 'redux';

import counter from './counter'
import loggedReducer from './loggedReducer'


const rootReducer = combineReducers({
    counter: counter,
    loggedReducer: loggedReducer
});


//actions
const increment = () => {
    return{
        type: 'INCREMENT'
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

const login = () => {
    return {
        type: 'LOG_IN'
    }
}
