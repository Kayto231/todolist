import React, { useEffect } from "react";
import "../../index.scss";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Content_Item from "../Content__Item/Content_Item";

import { getTasksLoadedFunction } from "../../redux/actions/authactions";

const Main_Content = () => {
  const { tasks, searchInput } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasksLoadedFunction());
  }, []);

  return (
    <main className="main">
      <div className="main__header">
        <h1 className="text">
          You’ve got{" "}
          <span className="highlight__red"> {tasks.length} task</span> today{" "}
        </h1>
        <img
          className="img_plus-icon"
          src="./img/plus-add.svg"
          alt="plus-icon"
        />
        <Link to={"/addtask"}>
          <button className="button button__add">Add New</button>
        </Link>
      </div>
      <div className="main__content">
        <h1 className="text">On Hold</h1>
        <div className="content__block">
          {tasks.length >= 1 ? (
            searchInput.length >= 1 ? (
              tasks
                .filter((el) =>
                  el.content.toLowerCase().includes(searchInput.toLowerCase())
                )
                .map((el) => (
                  <Content_Item
                    content={el.content}
                    status={el.status}
                    priority={el.priority}
                    isDone={el.isDone}
                    id={el.id}
                    key={el.id}
                  />
                ))
            ) : (
              tasks
                .filter((el) => el.isDone === false)
                .map((el) => (
                  <Content_Item
                    content={el.content}
                    status={el.status}
                    priority={el.priority}
                    isDone={el.isDone}
                    id={el.id}
                    key={el.id}
                  />
                ))
            )
          ) : (
            <span className="span__text__absente">Create your first task!</span>
          )}
        </div>
      </div>
      <div className="main__footer">
        <div className="content__text">
          <h1 className="block__name">
            Completed{" "}
            <span className="highlight__orange">
              <h1 className="text">Inactive</h1>
            </span>
          </h1>
        </div>
        {tasks.length >= 1 ? (
          searchInput.length >= 1 ? (
            <span className="span__text__absente">
              Add a task and complete!
            </span>
          ) : (
            tasks
              .filter((el) => el.isDone === true)
              .map((el) => (
                <Content_Item
                  content={el.content}
                  status={el.status}
                  priority={el.priority}
                  isDone={el.isDone}
                  id={el.id}
                  key={el.id}
                />
              ))
          )
        ) : (
          <span className="span__text__absente">Add a task and complete!</span>
        )}
      </div>
    </main>
  );
};

export default Main_Content;
