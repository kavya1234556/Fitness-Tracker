import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("loggedIn");
  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/");
    }
    return () => {};
  }, [isAuthenticated, navigate]);
  return (
    <div className="flex w-[100%]">
      <div className="w-[15%]">
        <Sidebar />
      </div>
      <div className="w-[85%]">
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedRoute;
