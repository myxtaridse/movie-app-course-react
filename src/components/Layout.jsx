import React from "react";
import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";

const Layout = ({ search, setSearch, setFetch }) => {
  return (
    <div>
      <Header search={search} setSearch={setSearch} setFetch={setFetch} />
      <Outlet />
    </div>
  );
};

export default Layout;
