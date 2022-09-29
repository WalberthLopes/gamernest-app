import { useState, useEffect } from "react";

import styles from "./styles/header.module.css";

import SignInPopup from "./utils/signIn.popup";
import Navbar from "./components/navbar.component";

import CubecavePopup from "./utils/cubecave.popup";

import jwtDecode from "jwt-decode";

const Header = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getToken = localStorage.getItem("token");

    if (getToken) {
      const token = getToken.split(" ");

      if (token) {
        const decoded: any = jwtDecode(token?.[1]);

        setUsername(decoded.username);
      } else {
        console.log("No token has been found.");
      }
    } else {
      console.log("No bearer has been found.");
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.firstRow}>
        <div className={styles.firstRowContent}>
          <div className={styles.socialMedia}>
            <div className={styles.companyName}>CUBECAVE</div>

            <CubecavePopup />

            <button
              className={styles.firstRowButton}
              onClick={() => (location.href = "/shop")}
            >
              LOJA
            </button>

            <button
              className={styles.firstRowButton}
              onClick={() => alert("Indisponível.")}
            >
              NOTÍCIAS
            </button>
          </div>

          <div className={styles.login}>
            <button
              className={styles.firstRowButton}
              onClick={() => alert("Indisponível. Acesse o Discord.")}
            >
              SUPORTE
            </button>

            {username ? (
              <button
                className={styles.firstRowButton}
                onClick={() => (location.href = `/account/${username}`)}
              >
                PERFIL
              </button>
            ) : (
              <SignInPopup />
            )}
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Header;
