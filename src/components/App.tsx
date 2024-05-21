import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard";
import { AuthProvider, useAuth } from "../context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import styles from "./App.module.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CreateUser from "../pages/CreateUser/CreateUser";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <Routes>
          <Route path="/signup" element={<CreateUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
