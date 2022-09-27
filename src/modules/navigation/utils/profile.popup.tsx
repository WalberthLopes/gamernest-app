import { Popup, Grid } from "semantic-ui-react";

import { signOut } from "../functions/signOut";

import styles from "../styles/popups.module.css";

const ProfilePopup = ({ username }: any) => {
  const onSubmit = async () => {
    await signOut().then((response: any) => {
      if (response === true) {
        location.reload();
      } else return;
    });
  };

  return (
    <Popup
      on="click"
      closeOnDocumentClick={true}
      position="bottom right"
      trigger={
        <button className={styles.signInButton}>
          {username.toUpperCase()}
        </button>
      }
    >
      <Grid centered={true} className={styles.content}>
        <Grid.Row>
          <button
            className={styles.signInButton}
            onClick={() => (location.href = `/account/${username}`)}
          >
            PERFIL
          </button>
          |
          <button className={styles.signInButton} onClick={() => onSubmit()}>
            SAIR
          </button>
        </Grid.Row>
      </Grid>
    </Popup>
  );
};

export default ProfilePopup;
