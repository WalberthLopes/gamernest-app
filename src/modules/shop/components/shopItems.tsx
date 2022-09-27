import { useState, useEffect } from "react";

import styles from "../../account/styles/shopItems.module.css";
import itemStyle from "../../account/styles/newItem.module.css";

import { getProductsData } from "../functions/getProducts";
import ItemDetails from "../utils/itemDetails";
import { createPaymentCheckout } from "../functions/createPaymentCheckout";
import { getCurrentUser } from "../../navigation/functions/getCurrentUser";

const ShopItems = () => {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await getProductsData();
      const userResponse = await getCurrentUser();

      setData(response.data);
      setUserData(userResponse?.[0]);
    };
    getData();
  }, []);

  const handleCheckout = async (props: {}) => {
    const response = await createPaymentCheckout(props, userData);

    location.href = response;
  };

  type Products = {
    uuid: string;
    name: string;
    description: string;
    icon: string;
    price: number;
    commands: string;
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.items}>
          {data.map((props: Products, index: number) => {
            return (
              <div className={itemStyle.content} key={index}>
                <div>
                  <img
                    className={itemStyle.contentImage}
                    src={`${props.icon}`}
                  />
                </div>

                <div className={itemStyle.contentTitle}>
                  {props.name}

                  <ItemDetails props={props.description} />
                </div>

                <div className={itemStyle.contentValue}>R$ {props.price}</div>

                <div className={itemStyle.contentButton}>
                  {userData ? (
                    <button
                      className={itemStyle.button}
                      onClick={() => handleCheckout(props)}
                    >
                      COMPRAR
                    </button>
                  ) : (
                    <button className={itemStyle.button}>FAÇA LOGIN</button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopItems;
