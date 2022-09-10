import { Popup, Grid } from "semantic-ui-react";

// Icons
import { ImMenu } from "react-icons/im";

// Styles
import styles from "../styles/navbar.module.css";

const MobileMenuComponent = () => {
  return (
    <Popup
      trigger={
        <button className={styles.mobileMenu}>
          <ImMenu size={25} />
        </button>
      }
      on="click"
      position="bottom left"
      className={styles.mobilePopup}
    >
      <Grid columns={1} className={styles.mobileColumns}>
        <Grid.Column className={styles.mobileColumn}>
          <button className={styles.mobileButton}>Home</button>
        </Grid.Column>

        <Grid.Column className={styles.mobileColumn}>
          <button className={styles.mobileButton}>Fórum</button>
        </Grid.Column>

        <Grid.Column className={styles.mobileColumn}>
          <button className={styles.mobileButton}>Notícias</button>
        </Grid.Column>

        <Grid.Column className={styles.mobileColumn}>
          <button className={styles.mobileButton}>Wiki</button>
        </Grid.Column>

        <Grid.Column className={styles.mobileColumn}>
          <button className={styles.mobileButton}>Loja</button>
        </Grid.Column>
      </Grid>
    </Popup>
  );
};

export default MobileMenuComponent;
