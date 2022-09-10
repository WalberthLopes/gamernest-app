// Styles
import styles from "../styles/lastNews.module.css";

const LastNewsComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CUBECAVE, O RETORNO 09.30.22</h1>

      <p className={styles.text}>
        O MELHOR SURVIVAL DE TODOS OS TEMPOS ESTÁ DE VOLTA E VEIO COM MUITAS
        NOVIDADES! INICIE SUA NOVA AVENTURA E EXPLORE TUDO O QUE O SERVIDOR TEM
        A LHE PROPORCIONAR.
      </p>

      <p className={styles.fishing}>
        <a href="/news">INICIE SUA AVENTURA COM VIP</a>
      </p>

      <div className={styles.buttons}>
        <button className={styles.button}>SAIBA MAIS</button>
        <button className={styles.button}>JOGAR</button>
      </div>
    </div>
  );
};

export default LastNewsComponent;
