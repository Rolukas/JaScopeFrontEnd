import { combineReducers } from 'redux';

// // Reducers
// import authReducer from './redux/reducer';
import { userConfigReducer } from './components/Login/redux/reducer';

const principalReducer = combineReducers({
   userConfig: userConfigReducer,
});

export default principalReducer;