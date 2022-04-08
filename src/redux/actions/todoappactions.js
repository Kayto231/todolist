import { ADD_TASK, CHANGE_COMPLETED_STATE, REMOVE_TASK } from "../consts";

export const addTaskAction = (array) => ({ type: ADD_TASK, payload: array });
export const removeTaskAction = (array) => ({
  type: REMOVE_TASK,
  payload: array,
});
export const changeCompletedStateAction = (array) => ({
  type: CHANGE_COMPLETED_STATE,
  payload: array,
});

export function addTaskFunction(currentArray, objToAdd) {
  return (dispatch) => {
    dispatch(addTaskAction([...currentArray, objToAdd]));
  };
}

export function removeTaskFunction(currentArray = [], objToRemove) {
  return (dispatch) => {
    const finalArray = currentArray.filter((el) => el.id !== objToRemove.id);

    dispatch(removeTaskAction(finalArray));
  };
}

export function changeCompletedStateFunction(currentArray = [], objToChange) {
  return (dispatch) => {
    currentArray
      .filter((el) => el.id === objToChange.id)
      .map((el) => (el.isDone = !objToChange.isDone));

    console.log(currentArray);
    dispatch(removeTaskAction(currentArray));
  };
}
