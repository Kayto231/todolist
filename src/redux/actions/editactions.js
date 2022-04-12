import {
  CHANGE_IS_EDIT_STATE,
  SET_EDIT_OBJECT,
  SET_IS_EDIT_ERROR,
} from "../consts";
import { addTaskAction } from "./todoappactions";

export const changeIsEditStateAction = (boolean) => ({
  type: CHANGE_IS_EDIT_STATE,
  payload: boolean,
});

export const setIsErrorStateAction = (boolean) => ({
  type: SET_IS_EDIT_ERROR,
  payload: boolean,
});

export const setIsErrorMessageAction = (string) => ({
  type: SET_IS_EDIT_ERROR,
  payload: string,
});

export const setEditObjectAction = (obj) => ({
  type: SET_EDIT_OBJECT,
  payload: obj,
});

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
