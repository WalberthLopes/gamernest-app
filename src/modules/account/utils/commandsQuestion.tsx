import { Popup } from "semantic-ui-react";

import { BsQuestionCircle } from "react-icons/bs";

const CommandsQuestion = () => {
  return (
    <Popup on="hover" trigger={<BsQuestionCircle />} position="right center">
      <p>Os comandos devem ser separados utilizando , (vírgulas).</p>

      <p>
        Utilize {"<player>"} como placeholder para determinar o nick do jogador.
      </p>

      <p>
        <b>Exemplo:</b> cmi give {"<player>"} 01 apple, cmi give {"<player>"} 01
        diamondsword
      </p>
    </Popup>
  );
};

export default CommandsQuestion;
