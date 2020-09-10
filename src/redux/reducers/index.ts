import { combineReducers } from "redux";
import authReducer from './authReducer';
import todoReducer from './todoReducer';
import userReducer from './userReducer';
import { loaderReducer } from './loaderReducer';

export const rootReducer = combineReducers({
    auth: authReducer, 
    todo: todoReducer,
    loader: loaderReducer,
    user: userReducer,
});
