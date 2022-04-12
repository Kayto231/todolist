import { AnyAction } from "redux";
import {
  CHANGE_IS_EDIT_STATE,
  SET_EDIT_OBJECT,
  SET_IS_EDIT_ERROR,
  SET_IS_EDIT_ERROR_MESSAGE,
} from "../consts";

enum authReducerEnum {
  IS_AUTH = "IS_AUTH",
  SET_IS_AUTH = "SET_IS_AUTH",
}

interface IeditObject<Type> {
  content: string;
  status: string;
  priority: string;
  isDone: boolean;
  id?: number;
}

interface isEditState {
  isEdit: boolean;
  editObject: IeditObject<Object>;
  isEditErrorMessage: string;
  isEditError: boolean;
}

const initialState: isEditState = {
  isEdit: true,
  editObject: { content: "", status: "", priority: "", isDone: false },
  isEditErrorMessage: "",
  isEditError: false,
};

export const editReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_EDIT_OBJECT:
      return {
        ...state,
        editObject: action.payload,
      };
    case CHANGE_IS_EDIT_STATE:
      return {
        ...state,
        isEdit: action.payload,
      };
    case SET_IS_EDIT_ERROR:
      return {
        ...state,
        isEditError: action.payload,
      };
    case SET_IS_EDIT_ERROR_MESSAGE:
      return {
        ...state,
        isEditErrorMessage: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
