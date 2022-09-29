import { Modal, Grid } from "semantic-ui-react";

import { useState } from "react";

import { BsQuestionCircle } from "react-icons/bs";

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
            backgroundColor: "black",
            color: "gray",
            border: "1px solid gray",
          }}
        >
          <Grid.Row>
            {desc.map((e: string, i: number) => {
              return <p key={i}>- {e}</p>;
            })}

            <button
              onClick={() => setOpen(false)}
              style={{
                backgroundColor: "black",
                color: "red",
                position: "absolute",
                left: "101%",
                bottom: "98%",
                borderRadius: "10px",
              }}
            >
              X
            </button>
          </Grid.Row>
        </Grid>
      }
    />
  );
};

export default ItemDetails;
