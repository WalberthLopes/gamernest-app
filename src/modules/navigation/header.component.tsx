import { useState, useEffect } from "react";

// Styles
import styles from "./styles/header.module.css";

// Components
import ProfilePopup from "./utils/profile.popup";
import SignInPopup from "./utils/signIn.popup";
import Navbar from "./components/navbar.component";

// Functions
import { getCurrentUser } from "./functions/getCurrentUser";
import { isAuth } from "./functions/isAuth";
import CubecavePopup from "./utils/cubecave.popup";

const Header = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getUser = async () => {
      let response = await getCurrentUser();
      response?.map((element: any) => {
        setUsername(element.username);
        setEmail(element.email);
      });
    };
    getUser();
    const response = isAuth();
    console.log(response);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.firstRow}>
        <div className={styles.firstRowContent}>
          <div className={styles.socialMedia}>
            <div className={styles.companyName}>GAMERNEST</div>

            <CubecavePopup />

            <button className={styles.firstRowButton}>LOJA</button>

            <button className={styles.firstRowButton}>NOTÍCIAS</button>
          </div>

          <div className={styles.login}>
            <button className={styles.firstRowButton}>SUPORTE</button>

            {username ? (
              <ProfilePopup username={username} email={email} />
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
