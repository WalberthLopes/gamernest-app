import { Popup } from "semantic-ui-react";

import { BsKeyFill } from "react-icons/bs";

import styles from "../styles/userKeys.module.css";

const ShowKey = ({ itemKey, status }: any) => {
  return (
    <Popup
      trigger={
        status === "paid" ? (
          <div className={styles.keyPaidButton}>
            <BsKeyFill size={20} />
          </div>
        ) : (
          <div className={styles.keyUnpaidButton}>
            <BsKeyFill size={20} />
          </div>
        )
      }
      on="click"
    >
      {itemKey}
    </Popup>
  );
};

export default ShowKey;
