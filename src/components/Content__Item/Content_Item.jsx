import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.scss";
import {
  changeCompletedStateFunction,
  removeTaskFunction,
} from "../../redux/actions/todoappactions";

const Content_Item = ({ content, status, priority, isDone, id }) => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.todo);
  return (
    <div className="content__item">
      <div className="content__text">
        <img src="./img/itembefore.svg" alt="itembefore" />
        <span className="text">{content}</span>
      </div>
      <div className="content__flex__row">
        <div className="content__status">
          <span className="status">{status}</span>
        </div>
        <div className="content__priority">
          <img
            className="img__priority"
            src="./img/prioritybefore.svg"
            alt="prioritybefore"
          />
          <span className="priority">{priority}</span>
        </div>
        <div className="img__content__block">
          <img src="./img/itemsetting.svg" alt="itemsetting" />
          <div className="content__button__settings">
            <span className="span__text">Edit</span>
            <span
              onClick={() =>
                dispatch(
                  removeTaskFunction(tasks, {
                    content,
                    status,
                    priority,
                    isDone,
                    id,
                  })
                )
              }
              className="span__text"
            >
              Remove
            </span>
            <span
              onClick={() =>
                dispatch(
                  changeCompletedStateFunction(tasks, {
                    content,
                    status,
                    priority,
                    isDone,
                    id,
                  })
                )
              }
              className="span__text"
            >
              {isDone ? "Undone" : "Done"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content_Item;
