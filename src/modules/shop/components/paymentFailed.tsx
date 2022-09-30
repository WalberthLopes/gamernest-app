import styles from "../styles/paymentSucced.module.css";

const PaymentFailed = () => {
  return (
    <div className={styles.container}>
      <p>Seu pagamento não foi efetuado!</p>

      <p>Talvez você cancelou seu pagamento ou seu banco não o autorizou!</p>

      <p>
        Caso a compra tenha sido debitada em seu cartão, não se preocupe, em
        algumas horas o seu dinheiro será estornado.
      </p>

      <p>
        Em caso de dúvidas acesse o{" "}
        <a href="https://discord.gg/dKYRfRjM8t">discord</a>.
      </p>

      <button onClick={() => (location.href = "/")}>HOME</button>
    </div>
  );
};

export default PaymentFailed;
