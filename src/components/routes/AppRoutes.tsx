import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import CreateUser from "../../pages/CreateUser/CreateUser";
import Login from "../../pages/Login/Login";
import Dashboard from "../../pages/Dashboard";

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/signup" element={<CreateUser />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Login />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
