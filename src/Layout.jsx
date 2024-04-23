import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen bg-stone-400 font-bodoni">
      <Outlet />
    </div>
  );
};

export default Layout;
