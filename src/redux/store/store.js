import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer.tsx";
import { editReducer } from "../reducers/editreducer.tsx";
import { todoAppReducer } from "../reducers/todoappreducer.tsx";

const rootReducer = combineReducers({
  todo: todoAppReducer,
  auth: authReducer,
  edit: editReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
