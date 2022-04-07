import { ADD_TASK, REMOVE_TASK } from "../consts";

export const addTaskAction = (array) => ({ type: ADD_TASK, payload: array });
export const removeTaskAction = (array) => ({
  type: REMOVE_TASK,
  payload: array,
});

export function addTaskFunction(currentArray, objToAdd) {
  return (dispatch) => {
    dispatch(addTaskAction([...currentArray, objToAdd]));
  };
}
export function removeTaskFunction(currentArray, objToRemove) {
  return (dispatch) => {
    currentArray.filter((el) => el.id !== objToRemove.id);
    dispatch(removeTaskAction(currentArray));
  };
}
