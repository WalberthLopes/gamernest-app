import { useState } from "react";

import styles from "../styles/shopSettings.module.css";

import NewItem from "./newItem";
import UserKeys from "./userKeys";

const ShopSettings = ({ props }: any) => {
  const [component, setComponent] = useState(<div />);

  const [buttonColor, setButtonColor] = useState("");
  const [buttonName, setButtonName] = useState("");

  const perms: string = props.perms;

  const handleComponentChange = (e: any) => {
    setButtonColor("rgb(32, 21, 32)");
    setButtonName(e.target.name);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        {perms.includes("MASTER") ? (
          <button
            className={styles.button}
            style={
              buttonName === "overview"
                ? { backgroundColor: `${buttonColor}` }
                : {}
            }
            name="overview"
            onClick={(e) => {
              handleComponentChange(e), setComponent(<div>overview</div>);
            }}
          >
            VIPs
          </button>
        ) : null}

        {perms.includes("MASTER") ? (
          <button
            className={styles.button}
            style={
              buttonName === "newItem"
                ? { backgroundColor: `${buttonColor}` }
                : {}
            }
            name="newItem"
            onClick={(e) => {
              handleComponentChange(e), setComponent(<NewItem />);
            }}
          >
            NOVO ITEM
          </button>
        ) : null}

        {perms.includes("MASTER") ? (
          <button
            className={styles.button}
            style={
              buttonName === "list" ? { backgroundColor: `${buttonColor}` } : {}
            }
            name="list"
            onClick={(e) => {
              handleComponentChange(e), setComponent(<div>listagem</div>);
            }}
          >
            LISTAGEM
          </button>
        ) : null}

        <button
          className={styles.button}
          style={
            buttonName === "myKeys" ? { backgroundColor: `${buttonColor}` } : {}
          }
          name="myKeys"
          onClick={(e) => {
            handleComponentChange(e), setComponent(<UserKeys props={props} />);
          }}
        >
          MINHAS KEYS
        </button>
      </div>

      <div className={styles.content}>{component}</div>
    </div>
  );
};

export default ShopSettings;
