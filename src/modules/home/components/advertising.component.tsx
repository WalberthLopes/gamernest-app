// Styles
import styles from "../styles/advertising.module.css";

const AdvertisingComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>ÚLTIMAS NOTÍCIAS E UPDATES</div>
      <div className={styles.main}>
        <a href="/news/this-is-a-test">
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.date}>09.30.22</div>
              <div className={styles.cardText}>
                Cubecave está de volta e com muitas novidades!
              </div>
            </div>
          </div>
        </a>

        <a href="/news/this-is-a-test">
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.date}>09.30.22</div>
              <div className={styles.cardText}>
                Cubecave está de volta e com muitas novidades!
              </div>
            </div>
          </div>
        </a>

        <a href="/news/this-is-a-test">
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.date}>09.30.22</div>
              <div className={styles.cardText}>
                Cubecave está de volta e com muitas novidades!
              </div>
            </div>
          </div>
        </a>

        <a href="/news/this-is-a-test">
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.date}>09.30.22</div>
              <div className={styles.cardText}>
                Cubecave está de volta e com muitas novidades!
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AdvertisingComponent;
