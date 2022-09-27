import { useState, useEffect } from "react";

import { getCurrentUser } from "../../navigation/functions/getCurrentUser";
import { isAuth } from "../../navigation/functions/isAuth";

import ProfilePopup from "../../navigation/utils/profile.popup";
import SignInPopup from "../../navigation/utils/signIn.popup";

import styles from "../styles/header.module.css";
import ProfileNavbar from "./navbar.component";

const ProfileHeader = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getUser = async () => {
      let response = await getCurrentUser();
      response?.map((element: any) => {
        setUsername(element.username);
      });
    };
    getUser();
    isAuth();
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.content}>
            <div className={styles.companyName}>GAMERNEST</div>

            <button
              onClick={() => (location.href = "/")}
              className={styles.button}
            >
              CUBECAVE
            </button>

            <button className={styles.button}>LOJA</button>

            <button className={styles.button}>NOTÍCIAS</button>
          </div>

          <div className={styles.login}>
            <button className={styles.button}>SUPORTE</button>

            {username ? <ProfilePopup username={username} /> : <SignInPopup />}
          </div>
        </div>
      </div>

      <ProfileNavbar username={username} />
    </div>
  );
};

export default ProfileHeader;
