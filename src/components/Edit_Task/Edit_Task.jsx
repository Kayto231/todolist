import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTaskFunction } from "../../redux/actions/todoappactions";

const Edit_Task = () => {
  const [status, setStatus] = useState("Pending");
  const [priority, setPriority] = useState("Minor");
  const [task, setTask] = useState("");
  const [taskValid, setTaskValid] = useState(true);

  const dispatch = useDispatch();
  const { tasks, isEdit } = useSelector((state) => state.todo);

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
        <Link to="/">
          <img src="./img/close.svg" alt="close-icon" className="img_close" />
        </Link>
      </header>
      {isEdit ? (
        <div className="add_task_field">
          <form action="" className="form_text">
            <label className="form_width">Choose a status for Task:</label>

            <select
              value={status}
              className="form_width border"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="In progress">In progress</option>
            </select>

            <label className="form_width">Choose a priority for Task:</label>

            <select
              value={priority}
              className="form_width border"
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="Minor">Minor</option>
              <option value="Normal">Normal</option>
              <option value="Critical">Critical</option>
            </select>

            <input
              type="text"
              className="form_width border mt-30"
              placeholder="Input your Task"
              value={task}
              onChange={(e) => handleTaskChange(e)}
            />
            <button
              onClick={() =>
                dispatch(
                  addTaskFunction(tasks, {
                    content: task,
                    status: status,
                    priority: priority,
                    id: Math.random(),
                  })
                )
              }
              disabled={taskValid}
              className={taskValid ? "button disabled" : "button"}
              type="button"
            >
              Add
            </button>
          </form>
        </div>
      ) : (
        <div className="edit_absent">
          <span className="text">Nothing is ready to edit</span>
          <Link to={"/"}>
            <button className="button">Get back!</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Edit_Task;
