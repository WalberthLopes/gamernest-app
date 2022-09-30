import { useState } from "react";

import signUp from "../functions/signUp";

import styles from "../styles/createAccount.module.css";

import logo from "../../navigation/images/logo.png";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [discord, setDiscord] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async () => {
    try {
      if (!username || !email || !discord || !password)
        return setMessage("Não deixe campos vázios!");

      if (!discord.includes("#"))
        return setMessage("Formato de Discord inválido! Exemplo: Nextti#1692");

      if (password.length < 10)
        return setMessage("Utilize uma senha mais forte!");

      if (password !== passwordRepeat)
        return setMessage("As senhas não coincidem!");

      setLoading(true);
      const response = await signUp(
        username.trim(),
        email.trim(),
        discord.trim(),
        password.trim()
      );
      setLoading(false);
      setMessage(response?.data.message);

      if (response?.data.success) {
        setTimeout(() => {
          location.href = "/";
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.signUpForm}>
        <img className={styles.logo} src={logo} alt="" />

        <div className={styles.inputsBox}>
          <div>
            {loading === true ? (
              <div className={styles.messages}>Validando dados...</div>
            ) : message ? (
              <div className={styles.messages}>{message}</div>
            ) : (
              <div className={styles.messages}>Faça parte da comunidade!</div>
            )}
          </div>

          <input
            className={styles.input}
            type="text"
            placeholder="Nick"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className={styles.input}
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className={styles.input}
            type="text"
            placeholder="Discord"
            onChange={(e) => setDiscord(e.target.value)}
          />

          <input
            className={styles.input}
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            className={styles.input}
            type="password"
            placeholder="Repita sua senha"
            onChange={(e) => setPasswordRepeat(e.target.value)}
          />

          <button className={styles.button} onClick={() => onSubmit()}>
            CRIAR CONTA
          </button>

          <div className={styles.alinks}>
            <a href="/">Já possui uma conta?</a>
            <a href="/account/change-password">Esqueceu sua senha?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
