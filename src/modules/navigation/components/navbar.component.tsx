// Functions
import MobileMenuComponent from "./mobileMenu.component";

// Styles
import styles from "../styles/navbar.module.css";

// Server logo
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img className={styles.logo} src={logo} />

        <div className={styles.desktop}>
          <div />

          <button
            onClick={() => (location.href = "/")}
            className={styles.button}
          >
            HOME
          </button>

          <button
            onClick={() => (location.href = "/forum")}
            className={styles.button}
          >
            FÓRUM
          </button>

          <button
            onClick={() => (location.href = "/noticias")}
            className={styles.button}
          >
            NOTÍCIAS
          </button>

          <button
            onClick={() => (location.href = "/wiki")}
            className={styles.button}
          >
            WIKI
          </button>

          <button
            onClick={() => (location.href = "/shop/items")}
            className={styles.button}
            style={{ borderRight: "1px groove rgb(24, 16, 24)" }}
          >
            LOJA
          </button>
        </div>
        <div className={styles.mobile}>
          <MobileMenuComponent />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
