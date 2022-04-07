import React from "react";
import "../../index.scss";

const Content_Item = ({ content, status, priority }) => {
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
            <span className="span__text">Remove</span>
            <span className="span__text">Done</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content_Item;
