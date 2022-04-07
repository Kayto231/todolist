import { AnyAction } from "redux";
import { ADD_TASK, REMOVE_TASK } from "../consts";

interface todoAppState {
  tasks: Array<object>;
  completedTasks: Array<object>;
}

const initialState: todoAppState = {
  tasks: [
    {
      content: "Monitor system performance and adjust hardware.",
      status: "Pending",
      priority: "Minor",
    },
    {
      content: "Monitor system performance and adjust hardware. 2",
      status: "Pending",
      priority: "Minor",
    },
  ],
  completedTasks: [
    {
      content: "Monitor system performance and adjust hardware. 3",
      status: "Pending",
      priority: "Minor",
    },
    {
      content: "Monitor system performance and adjust hardware. 4",
      status: "Pending",
      priority: "Minor",
    },
  ],
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
    default:
      return {
        ...state,
      };
  }
};
