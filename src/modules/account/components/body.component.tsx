import ShopSettings from "./shopSettings";

import styles from "../styles/body.module.css";

const BodyComponent = ({ props }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ShopSettings props={props} />
      </div>
    </div>
  );
};

export default BodyComponent;
