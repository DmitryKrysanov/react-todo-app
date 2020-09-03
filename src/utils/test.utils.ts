import { createStore } from "redux";
import { rootReducer } from "../redux/reducers";

export const findByTestAtrr = (component: any, attr: any) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const storeFactory = (initialState: any) => {
    return createStore(rootReducer, initialState);
 }