import { useNavigate } from "react-router-dom";
import { invoke } from "@tauri-apps/api/tauri";
import { useEffect } from "react";
import React from "react";

function CheckAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    invoke("check_auth").then((authorised) => {
      if (authorised) navigate("/main");
      else navigate("/auth");
    });
  });

  return <div>Wait...</div>;
}

export default CheckAuth;
