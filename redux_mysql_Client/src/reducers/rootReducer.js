import loginReducer from '../reducers/loginReducer';
import userReducer from '../reducers/userReducer';
import {combineReducers} from 'redux';

import {reducer as form} from 'redux-form';

const rootReducer = combineReducers({loginReducer,userReducer,form});

export default rootReducer;