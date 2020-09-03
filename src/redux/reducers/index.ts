import { combineReducers } from "redux";
import authReducer from './authReducer';
import todoReducer from './todoReducer';
import { loaderReducer } from './loaderReducer';

export const rootReducer = combineReducers({
    auth: authReducer, 
    todo: todoReducer,
    loader: loaderReducer,
});
