import "./components/menu";
import Menu from "./components/menu";
import { Routes, Route } from "react-router-dom";
import CheckAuth from "./pages/checkAuth";

function App() {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-5  gap-10 text-black dark:text-white">
      <Menu />
      <div className="col-span-4  p-5 m-4 rounded-2xl">
        <Routes>
          <Route path="/" element={<CheckAuth />} />
          <Route
            path="main"
            element={<div className="col-span-4">Main page!</div>}
          />
          <Route
            path="library"
            element={<div className="col-span-4">Your library!</div>}
          />
          <Route
            path="downloads"
            element={<div className="col-span-4">Your downloads!</div>}
          />
          <Route
            path="options"
            element={<div className="col-span-4">Options page</div>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
