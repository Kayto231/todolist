import MainComponent from "./components/MainComponent/MainComponent";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add_Task from "./components/Add_Task/Add_Task";
import Edit_Task from "./components/Edit_Task/Edit_Task";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainComponent />} />
          <Route path={"/addtask"} element={<Add_Task />} />
          <Route path={"/edittask"} element={<Edit_Task />} />

          <Route path="*" element={"There is nothing"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
