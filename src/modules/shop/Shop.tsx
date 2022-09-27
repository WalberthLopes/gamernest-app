import Footer from "../navigation/footer.component";
import Header from "../navigation/header.component";
import ShopItems from "./components/shopItems";

import styles from "./styles/shop.module.css";

const Shop = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />

        <ShopItems />
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
