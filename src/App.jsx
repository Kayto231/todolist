import "./index.scss";

import { BrowserRouter } from "react-router-dom";

import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
