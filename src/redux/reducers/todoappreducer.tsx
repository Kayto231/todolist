import { AnyAction } from "redux";
import { ADD_TASK, CHANGE_COMPLETED_STATE, REMOVE_TASK } from "../consts";

interface Itask {
  content: string;
  status: string;
  priority: string;
  isDone: boolean;
  id: number;
}

interface ItodoAppState {
  tasks: Itask[];
  isEdit: boolean;
}

const initialState: ItodoAppState = {
  tasks: [
    {
      content: "Monitor system performance and adjust hardware.",
      status: "Pending",
      priority: "Minor",
      isDone: false,
      id: 1,
    },
    {
      content: "Monitor system performance and adjust hardware. 2",
      status: "Pending",
      priority: "Minor",
      isDone: false,
      id: 2,
    },
    {
      content: "Monitor system performance and adjust hardware. 3",
      status: "Pending",
      priority: "Minor",
      isDone: true,
      id: 3,
    },
    {
      content: "Monitor system performance and adjust hardware. 4",
      status: "Pending",
      priority: "Minor",
      isDone: true,
      id: 4,
    },
  ],
  isEdit: false,
};

export const todoAppReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
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
