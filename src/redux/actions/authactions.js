import { GET_TASKS_LOADED } from "../consts";

export const getTasksLoadedAction = (array) => ({
  type: GET_TASKS_LOADED,
  payload: array,
});

export function getTasksLoadedFunction() {
  return (dispatch) => {
    const itemResponse = localStorage.getItem("tasks");

    const data = itemResponse ? JSON.parse(itemResponse) : [];

    dispatch(getTasksLoadedAction(data));
  };
}
