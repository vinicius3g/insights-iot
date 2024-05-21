import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./login.module.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      setError("");
      navigate('/dashboard')

      // alert("Login bem-sucedido!");
    } catch (err) {
      setError("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <form onSubmit={handleLogin} className={styles.form}>
        <div className={styles.wrapper}>
          <div className={styles.input_container}>
            <input
              className={styles.input}
              placeholder="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.input_container}>
            <input
              className={styles.input}
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className={styles.error} style={{ color: "red" }}>{error}</p>}

          <button className={styles.login_button} type="submit">
            Entrar
          </button>

          <button className={styles.login_button} onClick={() => navigate('/signup')}>
            Criar conta
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
