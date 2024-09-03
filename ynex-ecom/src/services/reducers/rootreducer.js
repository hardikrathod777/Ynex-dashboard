import { combineReducers } from 'redux';
import authReducer from './authReducer';
import getproReducer from './getproReducer'
import cartReducer from './cartReducer';
const rootreducer = combineReducers({
    authReducer,
    getproReducer,
    cartReducer
});

export default rootreducer;