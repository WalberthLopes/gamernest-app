import { useState, useEffect } from "react";

import styles from "../styles/paymentSucced.module.css";

import jwtDecode from "jwt-decode";

const PaymentSucced = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getToken = localStorage.getItem("token");

    if (getToken) {
      const token = getToken.split(" ");

      if (token) {
        const decoded: any = jwtDecode(token?.[1]);

        setUsername(decoded.username);
      } else {
        console.log("No token has been found.");
      }
    } else {
      console.log("No bearer has been found.");
    }
  }, []);

  return (
    <div className={styles.container}>
      <p>Seu pagamento foi aprovado!</p>

      <p>Um email foi enviado contento sua key de ativação!</p>

      <p>
        Você também consegue acessar suas keys através de seu{" "}
        <a href={`/account/${username}`}>perfil</a>.
      </p>

      <p>Nós do CubeCave agradecemos o seu apoio!</p>

      <button onClick={() => (location.href = "/")}>HOME</button>
    </div>
  );
};

export default PaymentSucced;
