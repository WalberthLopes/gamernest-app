import { Modal, Header } from "semantic-ui-react";
import { useState } from "react";

import styles from "../styles/footer.module.css";

const ServiceTerms = () => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      trigger={<button className={styles.trigger}>Termos de serviço</button>}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      style={{
        backgroundColor: "transparent",
      }}
      size="small"
      content={
        <div className={styles.privacyPolicyContainer}>
          <Header color="grey">Termos de serviço</Header>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            numquam repellat totam voluptatem autem at sunt deserunt veritatis
            ad, quae voluptates id excepturi dolorum reiciendis nostrum
            assumenda ut mollitia consectetur?
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            numquam repellat totam voluptatem autem at sunt deserunt veritatis
            ad, quae voluptates id excepturi dolorum reiciendis nostrum
            assumenda ut mollitia consectetur?
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            numquam repellat totam voluptatem autem at sunt deserunt veritatis
            ad, quae voluptates id excepturi dolorum reiciendis nostrum
            assumenda ut mollitia consectetur?
          </p>

          <div style={{ textAlign: "right" }}>
            <button className={styles.button} onClick={() => setOpen(false)}>
              X
            </button>
          </div>
        </div>
      }
    />
  );
};

export default ServiceTerms;
