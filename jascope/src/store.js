import { createStore } from 'redux'; 
import principalReducer from './reducers';

const initialState = {};

const store = createStore(
    principalReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;