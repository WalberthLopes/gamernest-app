import { Popup, Grid, Button } from "semantic-ui-react";

// Styles
import styles from "../styles/cubecave.module.css";

const CubecavePopup = () => {
  return (
    <Popup
      on="click"
      trigger={<button className={styles.triggerButton}>DISCORD</button>}
    >
      <Grid centered={true} className={styles.content}>
        <Grid.Row>
          <div className={styles.header}>JAVA 1.19.2</div>
        </Grid.Row>

        <Grid.Row>
          <Button
            onClick={() => (location.href = "https://discord.gg/dKYRfRjM8t")}
          >
            ACESSE
          </Button>
        </Grid.Row>
      </Grid>
    </Popup>
  );
};

export default CubecavePopup;
