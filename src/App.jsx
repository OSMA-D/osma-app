import { useState } from "react";
import "./components/menu";
import Menu from "./components/menu";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-5  gap-10 text-white">
      <Menu />
      <Routes>
        <Route
          path="/"
          element={
            <div className="text-white col-span-4">
              Page for check authorisation
            </div>
          }
        />
        <Route
          path="main"
          element={<div className="text-white col-span-4">Main page!</div>}
        />
        <Route
          path="library"
          element={<div className="text-white col-span-4">Your library!</div>}
        />
        <Route
          path="downloads"
          element={<div className="text-white col-span-4">Your downloads!</div>}
        />
      </Routes>
    </div>
  );
}

export default App;
