import React from "react";
import "../../index.scss";

import { Link } from "react-router-dom";
import Content_Item from "../Content__Item/Content_Item";
import { useSelector } from "react-redux";

const Main_Content = () => {
  const { tasks, completedTasks } = useSelector((state) => state.todo);
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
          {tasks.map((el) => (
            <Content_Item
              content={el.content}
              status={el.status}
              priority={el.priority}
            />
          ))}
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
        {completedTasks.map((el) => (
          <Content_Item
            content={el.content}
            status={el.status}
            priority={el.priority}
          />
        ))}
      </div>
    </main>
  );
};

export default Main_Content;
