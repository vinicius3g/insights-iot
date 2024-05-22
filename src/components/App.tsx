import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import styles from "./App.module.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className={styles.app}>
          <Header />

          <main className={styles.main}>
            <AppRoutes />
          </main>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
