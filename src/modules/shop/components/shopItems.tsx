import { useState, useEffect } from "react";

import styles from "../../account/styles/shopItems.module.css";
import itemStyle from "../../account/styles/newItem.module.css";

import { getProductsData } from "../functions/getProducts";
import ItemDetails from "../utils/itemDetails";
import { createPaymentCheckout } from "../functions/createPaymentCheckout";

import jwtDecode from "jwt-decode";

const ShopItems = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const getToken = localStorage.getItem("token");

    if (getToken) {
      const token = getToken.split(" ");

      if (token) {
        const decoded: any = jwtDecode(token?.[1]);

        setUser(decoded.uuid);
      } else {
        console.log("No token has been found.");
      }
    } else {
      console.log("No bearer has been found.");
    }

    const getData = async () => {
      const response = await getProductsData();

      setData(response.data);
    };
    getData();
  }, []);

  const handleCheckout = async (props: {}) => {
    const response = await createPaymentCheckout(props, user);

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
                  {user ? (
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
