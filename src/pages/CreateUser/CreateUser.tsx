import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./CreateUser.module.css";

const CreateUse: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Substitua 'http://localhost:5000' pela URL do seu servidor
      await axios.post("http://localhost:5000/api/users", { username, email, password });

      setError("");
      navigate("/login");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      setError("Erro ao cadastrar usuário. Por favor, tente novamente.");
      alert("Erro ao cadastrar usuário. Por favor, tente novamente.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cadastro</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.wrapper}>
          <div className={styles.input_container}>
            <input
              className={styles.input}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nome de usuário"
              required
            />
          </div>

          <div className={styles.input_container}>
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
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
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUse;
