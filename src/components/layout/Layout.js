import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "./Main.scss";

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
