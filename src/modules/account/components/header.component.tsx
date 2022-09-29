import styles from "../styles/header.module.css";

const ProfileHeader = ({ username }: any) => {
  const path = location.pathname;

  const onSubmit = () => {
    localStorage.clear();
    location.href = "/";
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.content}>
            <div className={styles.companyName}>CUBECAVE</div>

            <button
              onClick={() => (location.href = "/")}
              className={styles.button}
            >
              HOME
            </button>

            <button
              className={
                path === `/shop` ? styles.selectedButton : styles.button
              }
            >
              LOJA
            </button>

            <button className={styles.button}>NOTÍCIAS</button>

            <button
              className={
                path === `/forum` ? styles.selectedButton : styles.button
              }
            >
              FÓRUM
            </button>

            <button
              className={
                path === `/suporte` ? styles.selectedButton : styles.button
              }
            >
              SUPORTE
            </button>

            <button
              className={
                path === `/account/${username}`
                  ? styles.selectedButton
                  : styles.button
              }
              onClick={() => (location.href = `/account/${username}`)}
            >
              PERFIL
            </button>

            <button className={styles.button} onClick={() => onSubmit()}>
              SAIR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
