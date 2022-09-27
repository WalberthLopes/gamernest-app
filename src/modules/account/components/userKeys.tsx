import { useState, useEffect } from "react";

import { getUserKeys } from "../functions/getUserKeys";

import { BsKeyFill, BsTrashFill } from "react-icons/bs";

import styles from "../styles/userKeys.module.css";
import ShowKey from "../utils/showKey";

const UserKeys = ({ props }: any) => {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getUserKeys(props.uuid);
      setKeys(response);
    };
    getData();
  }, []);

  return (
    <div>
      {keys.map((item: any, index: number) => {
        return (
          <div key={index} className={styles.container}>
            <ShowKey itemKey={item.key} status={item.status} />

            <div className={styles.keyInfo}>
              <div className={styles.keySeparator}>{item.name}</div>

              <div className={styles.keySeparator}>
                {item.method === "card" ? "CARTÃO" : "BOLETO"}
              </div>

              <div className={styles.keySeparator}>
                {item.status === "paid"
                  ? "PAGAMENTO APROVADO"
                  : item.status === "unpaid"
                  ? "PAGAMENTO NÃO APROVADO"
                  : "AGUARDANDO PAGAMENTO"}
              </div>

              <div>{item.is_used ? "ATIVADA" : "NÃO ATIVADA"}</div>
            </div>

            <div className={styles.deleteKey}>
              <BsTrashFill />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserKeys;
