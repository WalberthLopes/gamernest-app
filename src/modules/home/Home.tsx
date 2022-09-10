// Components
import Footer from "../navigation/footer.component";
import Header from "../navigation/header.component";
import AdvertisingComponent from "./components/advertising.component";
import LastNewsComponent from "./components/lastNews.component";

// Styles
import styles from "./styles/home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />

        <LastNewsComponent />

        <AdvertisingComponent />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
