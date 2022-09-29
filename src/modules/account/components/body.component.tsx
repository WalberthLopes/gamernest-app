import ShopSettings from "./shopSettings";

import styles from "../styles/body.module.css";

const BodyComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ShopSettings />
      </div>
    </div>
  );
};

export default BodyComponent;
