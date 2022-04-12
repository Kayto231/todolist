import {
  ADD_TASK,
  CHANGE_COMPLETED_STATE,
  REMOVE_TASK,
  SET_SEARCH_INPUT,
} from "../consts";

//Action to add tasks to the tasks container
export const addTaskAction = (array) => ({ type: ADD_TASK, payload: array });

//Action to remove a task from the tasks container
export const removeTaskAction = (array) => ({
  type: REMOVE_TASK,
  payload: array,
});

export const changeCompletedStateAction = (array) => ({
  type: CHANGE_COMPLETED_STATE,
  payload: array,
});

export const setSeactInput = (string) => ({
  type: SET_SEARCH_INPUT,
  payload: string,
});

export function addTaskFunction(currentArray, objToAdd) {
  return (dispatch) => {
    const result = [...currentArray, objToAdd];

    localStorage.setItem("tasks", JSON.stringify(result));

    dispatch(addTaskAction(result));
  };
}

export function removeTaskFunction(currentArray = [], objToRemove) {
  return (dispatch) => {
    const finalArray = currentArray.filter((el) => el.id !== objToRemove.id);

    localStorage.setItem("tasks", JSON.stringify(finalArray));

    dispatch(removeTaskAction(finalArray));
  };
}

export function changeCompletedStateFunction(currentArray = [], objToChange) {
  return (dispatch) => {
    currentArray
      .filter((el) => el.id === objToChange.id)
      .map((el) => (el.isDone = !objToChange.isDone));

    localStorage.setItem("tasks", JSON.stringify(currentArray));

    dispatch(removeTaskAction(currentArray));
  };
}
