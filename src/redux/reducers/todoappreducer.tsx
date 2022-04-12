import { AnyAction } from "redux";
import {
  ADD_TASK,
  CHANGE_COMPLETED_STATE,
  GET_TASKS_LOADED,
  REMOVE_TASK,
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
  searchInput: string;
}

const initialState: ItodoAppState = {
  tasks: [],
  searchInput: "",
};

export const todoAppReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload,
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
