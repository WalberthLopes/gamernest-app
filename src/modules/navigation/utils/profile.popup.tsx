import { Popup, Grid, Button, Header } from "semantic-ui-react";

// Functions
import { signOut } from "../functions/signOut";

// Bootstrap icons
import { ImUser } from "react-icons/im";

// Styles
import styles from "../styles/header.module.css";

const ProfilePopup = ({ username, email }: any) => {
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
      trigger={<button className={styles.firstRowButton}>MINHA CONTA</button>}
    >
      <Grid centered={true}>
        <Grid.Row>
          <Header>Olá {username}</Header>
        </Grid.Row>
        <Grid.Row>
          <Button onClick={() => (location.href = "/profile")}>PERFIL</Button>

          <Button onClick={() => onSubmit()}>SAIR</Button>
        </Grid.Row>
      </Grid>
    </Popup>
  );
};

export default ProfilePopup;
