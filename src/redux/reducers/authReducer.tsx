import { AnyAction } from "redux";
import { todoAppReducer } from "./todoappreducer";

enum authReducerEnum {
  IS_AUTH = "IS_AUTH",
  SET_IS_AUTH = "SET_IS_AUTH",
}

interface isAuthState {
  isAuth: boolean;
}

const initialState: isAuthState = {
  isAuth: false,
};

export const authReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case authReducerEnum.SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
