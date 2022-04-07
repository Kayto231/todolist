import { createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { todoAppReducer } from "../reducers/todoappreducer.tsx";

const rootReducer = combineReducers({
    todo: todoAppReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))