import { Popup } from "semantic-ui-react";

import { BsQuestionCircle } from "react-icons/bs";

const ItemDetails = ({ props }: any) => {
  const desc = props.split("\n");
  return (
    <Popup on="hover" trigger={<BsQuestionCircle />} position="right center">
      {desc.map((e: string, i: number) => {
        return <p key={i}>✔ {e}</p>;
      })}
    </Popup>
  );
};

export default ItemDetails;
