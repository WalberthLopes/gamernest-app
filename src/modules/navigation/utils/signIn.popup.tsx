import { useState } from "react";
import { Popup, Grid, Button, Header } from "semantic-ui-react";

// Functions
import signIn from "../functions/signIn";

// Icons
import { ImEnter } from "react-icons/im";

// Styles
import styles from "../styles/popups.module.css";

const SignInPopup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async () => {
    try {
      const response = await signIn(email.trim(), password.trim());
      if (response) {
        setMessage(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Popup
      on="click"
      closeOnDocumentClick={true}
      position="bottom right"
      trigger={<button className={styles.signInButton}>MINHA CONTA</button>}
    >
      <Grid centered={true} className={styles.content}>
        <Grid.Row>
          <div className={styles.header}>{message ? message : "LOGIN"}</div>
        </Grid.Row>
        <Grid.Row>
          <input
            className={styles.input}
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid.Row>
        <Grid.Row>
          <Button onClick={() => onSubmit()}>ENTRAR</Button>
        </Grid.Row>
        <Grid.Row>
          <p>
            <a href="/account/create-account">Não possui uma conta?</a>
          </p>
          <p>
            <a href="/account/change-password">Esqueceu sua senha?</a>
          </p>
        </Grid.Row>
      </Grid>
    </Popup>
  );
};

export default SignInPopup;
