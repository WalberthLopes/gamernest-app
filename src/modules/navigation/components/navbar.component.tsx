// Components
import MobileMenuComponent from "./mobileMenu.component";

// Styles
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const path = location.pathname;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.desktop}>
          <button
            onClick={() => (location.href = "/")}
            className={path === "/" ? styles.selectedButton : styles.button}
          >
            HOME
          </button>

          <button
            onClick={() => (location.href = "/forum")}
            className={
              path === "/forum" ? styles.selectedButton : styles.button
            }
          >
            FÓRUM
          </button>

          <button
            onClick={() => (location.href = "/noticias")}
            className={
              path === "/noticias" ? styles.selectedButton : styles.button
            }
          >
            NOTÍCIAS
          </button>

          <button
            onClick={() => (location.href = "/wiki")}
            className={path === "/wiki" ? styles.selectedButton : styles.button}
          >
            WIKI
          </button>

          <button
            onClick={() => (location.href = "/shop")}
            className={path === "/shop" ? styles.selectedButton : styles.button}
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
