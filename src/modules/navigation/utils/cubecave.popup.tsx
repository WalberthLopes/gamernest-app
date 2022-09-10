import { Popup, Grid, Header, Button } from "semantic-ui-react";

// Styles
import styles from "../styles/cubecave.module.css";

import cubecaveLogo from "../../navigation/images/logo.png";

const CubecavePopup = () => {
  return (
    <Popup
      on="click"
      trigger={<button className={styles.triggerButton}>CUBECAVE</button>}
    >
      <Grid divided="vertically" centered={true} className={styles.content}>
        <Grid.Row>
          <div className={styles.header}>JAVA 1.19.2</div>
        </Grid.Row>

        <Grid.Row>
          <img className={styles.logo} src={cubecaveLogo} />
        </Grid.Row>

        <Grid.Row>
          <Button>DISCORD</Button>
        </Grid.Row>
      </Grid>
    </Popup>
  );
};

export default CubecavePopup;
