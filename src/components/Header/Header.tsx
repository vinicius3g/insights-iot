import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({} as any);

  const token = localStorage.getItem("token");

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users/profile", {
        headers: { Authorization: `BEARER ${token}` },
      });

      setUser(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUser();
  }, [isAuthenticated]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  console.log({isAuthenticated})

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Insights Iot</h1>
      {isAuthenticated && (
        <div className={styles.user_info_wrapper}>
          <div className={styles.welcome}>
            <p className={styles.user_info}>
              bem vindo! <br />
              <span className={styles.user_name}>{user?.username}</span>
            </p>
          </div>
          <button className={styles.logout} onClick={handleLogout}>sair</button>
        </div>
      )}
    </header>
  );
};

export default Header;
