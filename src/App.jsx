import "./components/menu";
import Menu from "./components/menu";
import { Routes, Route } from "react-router-dom";
import CheckAuth from "./pages/checkAuth";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { invoke } from "@tauri-apps/api/tauri";

let lngs = ["en", "ru"];
function App() {
  const { i18n } = useTranslation();

  let setLng = async () => {
    let lng = await invoke("get_lng");
    if (lng == i18n.language) return;
    i18n.changeLanguage(lng);
  };

  let changeLng = async (lang) => {
    await invoke("change_lng", { lng: lang });
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    setLng();
  });

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
            element={
              <div className="col-span-4">
                {lngs.map((val) => {
                  return (
                    <button
                      className="bg-zinc-500 p-5 m-5 rounded-3xl"
                      onClick={() => changeLng(val)}
                      key={val}
                    >
                      {val}
                    </button>
                  );
                })}
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
