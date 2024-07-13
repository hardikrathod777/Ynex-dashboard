import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
const rootreducer =combineReducers({
    authReducer,
    productReducer
});

export default rootreducer;