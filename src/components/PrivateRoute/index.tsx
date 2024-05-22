import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface PrivateRouteProps {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return isAuthenticated ? <Component /> : <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
