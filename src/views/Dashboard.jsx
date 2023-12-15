import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="p-7 sm:ml-64 relative overflow-x-auto">
        <Outlet />
      </div>
    </>
  );
}
