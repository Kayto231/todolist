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
      </div>
      <nav className="nav">
        <ul className="ul">
          <li className="li__bell">
            <img className="circle" src="./img/circle.svg" alt="bell" />
            <img src="./img/bell.svg" alt="bell" />
          </li>
          <li className="li">
            <img src="./img/profile-foto.svg" alt="profile-foto" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
