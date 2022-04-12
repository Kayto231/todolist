import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  changeIsEditStateAction,
  finishEditObjectFunction,
} from "../../redux/actions/editactions";

const Edit_Task = () => {
  const { tasks } = useSelector((state) => state.todo);
  const { isEdit, editObject } = useSelector((state) => state.edit);

  const [status, setStatus] = useState(editObject.status);
  const [priority, setPriority] = useState(editObject.priority);
  const [task, setTask] = useState(editObject.content);
  const [taskValid, setTaskValid] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("rendered");
  }, []);
  // Controling the input in adding task text
  const handleTaskChange = (e) => {
    task.length >= 1 ? setTaskValid(false) : setTaskValid(true);
    setTask(e.target.value);
  };

  return (
    <div className="add_task__container">
      <header className="add_task_header">
        <span className="add_task_text">
          Edit your <span className="highlight_red">Task</span>
        </span>
        <Link onClick={() => dispatch(changeIsEditStateAction(!isEdit))} to="/">
          <img src="./img/close.svg" alt="close-icon" className="img_close" />
        </Link>
      </header>

      <div className="add_task_field">
        <form action="" className="form_text">
          <label className="form_width">
            Choose a status to edit the Task:
          </label>

          <select
            value={status}
            className="form_width border"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="PENDING_STATUS">Pending</option>
            <option value="PROGRESS_STATUS">In progress</option>
          </select>

          <label className="form_width">
            Choose a priority to edit the Task:
          </label>

          <select
            value={priority}
            className="form_width border"
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="GREEN_COLOR">Minor</option>
            <option value="ORANGE_COLOR">Normal</option>
            <option value="RED_COLOR">Critical</option>
          </select>

          <input
            type="text"
            className="form_width border mt-30"
            placeholder="Input your Task"
            value={task}
            onChange={(e) => handleTaskChange(e)}
          />
          <Link
            to={"/"}
            onClick={() =>
              dispatch(
                finishEditObjectFunction(tasks, isEdit, {
                  content: task,
                  status,
                  priority,
                  isDone: editObject.isDone,
                  id: editObject.id,
                })
              )
            }
            className={taskValid ? "button disabled" : "button"}
          >
            Edit
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Edit_Task;
