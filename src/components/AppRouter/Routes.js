import Add_Task from "../Add_Task/Add_Task";
import Edit_Task from "../Edit_Task/Edit_Task";
import MainComponent from "../MainComponent/MainComponent";
import { ADD_TASK, EDIT_TASK, MAIN_PAGE } from "./consts";

export const publicRoutes = [
  {
    path: MAIN_PAGE,
    element: MainComponent,
  },
  {
    path: ADD_TASK,
    element: Add_Task,
  },
];

export const privateRoutes = [
  ...publicRoutes,
  {
    path: EDIT_TASK,
    element: Edit_Task,
  },
];
