import styles from "./styles/footer.module.css";

import PrivacyPolicy from "./utils/privacyPolicy.modal";
import ServiceTerms from "./utils/serviceTerms";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>
        <div>GAMERNEST ENTERTAINMENT ®</div>
        <div>
          <PrivacyPolicy /> | <ServiceTerms />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
