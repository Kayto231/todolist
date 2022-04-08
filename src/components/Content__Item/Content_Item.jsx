import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.scss";
import { Link } from "react-router-dom";
import {
  changeCompletedStateFunction,
  setEditObjectFunction,
  removeTaskFunction,
} from "../../redux/actions/todoappactions";
import { setColorOfPseudo } from "../functions/setColorOfPseudo";
import { setColorOfStatus } from "../functions/setColorOfStatus";

const Content_Item = ({ content, status, isDone, priority, id }) => {
  const dispatch = useDispatch();
  const { tasks, isEdit } = useSelector((state) => state.todo);

  return (
    <div className="content__item">
      <div className="content__text">
        <img src="./img/itembefore.svg" alt="itembefore" />
        <span className="text">{content}</span>
      </div>
      <div className="content__flex__row">
        {setColorOfStatus(status)}
        {setColorOfPseudo(priority)}
        <div className="img__content__block">
          <img src="./img/itemsetting.svg" alt="itemsetting" />
          <div className="content__button__settings">
            <Link
              to={"/edittask"}
              onClick={() =>
                dispatch(
                  setEditObjectFunction(isEdit, {
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
              Edit
            </Link>
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
