import { AnyAction } from "redux";
import {
  ADD_TASK,
  CHANGE_COMPLETED_STATE,
  CHANGE_ISEDIT_STATE,
  GET_TASKS_LOADED,
  REMOVE_TASK,
  SET_EDIT_OBJECT,
  SET_SEARCH_INPUT,
} from "../consts";

interface Itask {
  content: string;
  status: string;
  isDone: boolean;
  id: number;
  priority: string;
}

interface ItodoAppState {
  tasks: Itask[];
  isEdit: boolean;
  editObject: any;
  searchInput: string;
}

const initialState: ItodoAppState = {
  tasks: [],
  isEdit: false,
  editObject: {},
  searchInput: "",
};

export const todoAppReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload,
      };
    case SET_EDIT_OBJECT:
      return {
        ...state,
        editObject: action.payload,
      };
    case CHANGE_ISEDIT_STATE:
      return {
        ...state,
        isEdit: action.payload,
      };
    case GET_TASKS_LOADED:
      return {
        ...state,
        tasks: action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    case CHANGE_COMPLETED_STATE:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
