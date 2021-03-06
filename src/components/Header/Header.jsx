import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.scss";
import { setSeactInput } from "../../redux/actions/todoappactions";

const Header = () => {
  const dispatch = useDispatch();
  const { searchInput } = useSelector((state) => state.todo);

  return (
    <header className="header">
      <div className="input__search">
        <img src="./img/search.svg" alt="searc-icon" />
        <input
          type="text"
          className="input"
          placeholder="Search for any training you want "
          value={searchInput}
          onChange={(e) => dispatch(setSeactInput(e.target.value))}
        />
        <img
          className={
            searchInput.length >= 1
              ? "close-image__header opacity1"
              : "close-image__header opacity05"
          }
          src="./img/close.svg"
          alt="close-image"
          width={12}
          height={12}
          onClick={() => dispatch(setSeactInput(""))}
        />
      </div>
    </header>
  );
};

export default Header;
