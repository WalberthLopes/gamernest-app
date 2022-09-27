import styles from "../styles/navbar.module.css";

const ProfileNavbar = ({ username }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.content}>
          <button
            onClick={() => (location.href = `/account/${username}`)}
            className={styles.button}
          >
            PERFIL
          </button>

          <button
            onClick={() => (location.href = "/forum")}
            className={styles.button}
          >
            FÓRUM
          </button>

          <button
            onClick={() => (location.href = "/support/ticket")}
            className={styles.button}
          >
            SUPORTE
          </button>

          <button
            onClick={() => (location.href = "/wiki")}
            className={styles.button}
          >
            WIKI
          </button>

          <button
            onClick={() => (location.href = "/shop")}
            className={styles.button}
            style={{ borderRight: "1px groove rgb(24, 16, 24)" }}
          >
            LOJA
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileNavbar;
