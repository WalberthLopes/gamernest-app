import { Modal, Grid } from "semantic-ui-react";

import { useState } from "react";

import { BsQuestionCircle } from "react-icons/bs";

import styles from "../styles/itemDetails.module.css";

const ItemDetails = ({ props }: any) => {
  const [open, setOpen] = useState(false);

  const desc = props.split("\n");

  return (
    <Modal
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      trigger={<BsQuestionCircle />}
      content={
        <Grid
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "5px",
            paddingBottom: "5px",
            backgroundColor: "black",
            color: "gray",
            border: "1px solid gray",
          }}
        >
          {desc.map((e: string, i: number) => {
            return (
              <Grid.Row key={i} style={{ padding: "0" }}>
                <p>- {e}</p>
              </Grid.Row>
            );
          })}

          <button onClick={() => setOpen(false)} className={styles.closeButton}>
            X
          </button>
        </Grid>
      }
    />
  );
};

export default ItemDetails;
