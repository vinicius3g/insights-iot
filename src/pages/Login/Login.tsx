import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./login.module.css";
import { useAuth } from "../../context/AuthContext";
import Loader from "../../components/Loader/Loader";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      login(response.data.token);
      setError("");
      navigate("/dashboard");
      setLoading(false);
      // alert("Login bem-sucedido!");
    } catch (err) {
      setLoading(false);
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

          {error && (
            <p className={styles.error} style={{ color: "red" }}>
              {error}
            </p>
          )}

          <button className={styles.login_button} type="submit">
            {loading ? <Loader /> : "Entrar"}
          </button>

          <button className={styles.login_button} onClick={() => navigate("/signup")}>
            Criar conta
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
