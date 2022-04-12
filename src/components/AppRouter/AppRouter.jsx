import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { privateRoutes, publicRoutes } from "./Routes";

function AppRouter() {
  const { isEdit } = useSelector((state) => state.edit);

  return (
    <div>
      {isEdit ? (
        <>
          <Routes>
            {publicRoutes.map((el) => (
              <Route key={el.path} path={el.path} element={<el.element />} />
            ))}
            <Route path="/edittask" element={<Navigate to={"/"} />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            {privateRoutes.map((el) => (
              <Route key={el.path} path={el.path} element={<el.element />} />
            ))}
            <Route path="/edittask" element={<Navigate to={"/edittask"} />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default AppRouter;
