import {
  ADD_TASK,
  CHANGE_COMPLETED_STATE,
  CHANGE_ISEDIT_STATE,
  GET_TASKS_LOADED,
  REMOVE_TASK,
  SET_EDIT_OBJECT,
  SET_SEARCH_INPUT,
} from "../consts";

export const addTaskAction = (array) => ({ type: ADD_TASK, payload: array });
export const removeTaskAction = (array) => ({
  type: REMOVE_TASK,
  payload: array,
});
export const changeCompletedStateAction = (array) => ({
  type: CHANGE_COMPLETED_STATE,
  payload: array,
});
export const getTasksLoadedAction = (array) => ({
  type: GET_TASKS_LOADED,
  payload: array,
});
export const changeIsEditStateAction = (boolean) => ({
  type: CHANGE_ISEDIT_STATE,
  payload: boolean,
});
export const setEditObjectAction = (obj) => ({
  type: SET_EDIT_OBJECT,
  payload: obj,
});
export const finishEditObjectAction = (array) => ({
  type: SET_EDIT_OBJECT,
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

export function getTasksLoadedFunction() {
  return (dispatch) => {
    const itemResponse = localStorage.getItem("tasks");

    const data = itemResponse ? JSON.parse(itemResponse) : [];

    dispatch(getTasksLoadedAction(data));
  };
}

export function setEditObjectFunction(isEditState, objToEdit) {
  return (dispatch) => {
    dispatch(changeIsEditStateAction(!isEditState));
    dispatch(setEditObjectAction(objToEdit));
  };
}

export function finishEditObjectFunction(array, isEditState, editObject) {
  return (dispatch) => {
    dispatch(changeIsEditStateAction(!isEditState));
    const finalArray = array.filter((el) => el.id !== editObject.id);
    localStorage.setItem("tasks", JSON.stringify([...finalArray, editObject]));
    dispatch(addTaskAction([...finalArray, editObject]));
  };
}
