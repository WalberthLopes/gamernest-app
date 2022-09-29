import { useState, useEffect } from "react";

import styles from "../styles/newItem.module.css";
import CommandsQuestion from "../utils/commandsQuestion";
import ItemDetails from "../../shop/utils/itemDetails";
import { createNewItem } from "../../shop/functions/createNewItem";

const NewItem = () => {
  const [name, setName] = useState("");
  const [commands, setCommands] = useState("");
  const [desc, setDesc] = useState("");
  const [position, setPosition] = useState(0);
  const [value, setValue] = useState(0.0);
  const [finalValue, setFinalValue] = useState(0.0);

  const [tax, setTax] = useState(3.99);
  const [IOF, setIOF] = useState(6.38);

  const [file, setFile] = useState() as any;
  const [image, setImage] = useState() as any;

  const [submitResponse, setSubmitResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const updateName = (e: string) => {
    if (!e) {
      setName("NOME DO ITEM");
      return;
    }

    setName(e.trim().toUpperCase());
  };

  const updateDesc = (e: string) => {
    if (!e) {
      setDesc("Nenhuma descrição encontrada...");
      return;
    }

    setDesc(e.trim());
  };

  useEffect(() => {
    if (!value) {
      setValue(0.0);
      return;
    }

    const finalIOF = IOF / 100;
    const finalTax = tax / 100;

    const total = value * finalIOF + value * finalTax + value;

    setFinalValue(total);
  }, [tax, IOF, value]);

  useEffect(() => {
    if (!file) {
      setImage(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setImage(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const onSubmit = async () => {
    setLoading(true);

    const elements = {
      name,
      commands,
      desc,
      position,
      finalValue,
      file,
    };

    const response = await createNewItem(elements);

    setSubmitResponse(response);

    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <h3 className={styles.title}>NOVO PRODUTO NA LOJA</h3>

        <div className={styles.section}>
          <label className={styles.label} htmlFor="itemName">
            NOME
          </label>
          <input
            className={styles.input}
            type="text"
            name="itemName"
            onChange={(e) => updateName(e.target.value)}
          />
        </div>

        <div className={styles.section}>
          <div className={styles.commandsSection}>
            <label className={styles.label} htmlFor="itemCommands">
              COMANDOS
            </label>

            <CommandsQuestion />
          </div>
          <textarea
            name="itemCommands"
            className={styles.textarea}
            rows={8}
            onChange={(e) => setCommands(e.target.value)}
          ></textarea>
        </div>

        <div className={styles.section}>
          <label className={styles.label} htmlFor="itemDetails">
            DETALHES
          </label>
          <textarea
            name="itemDetails"
            className={styles.textarea}
            rows={8}
            onChange={(e) => updateDesc(e.target.value)}
          ></textarea>
        </div>

        <div className={styles.valueSection}>
          <div>
            <label className={styles.label} htmlFor="itemPos">
              POSIÇÃO
            </label>
            <input
              className={styles.input}
              type="number"
              step="0"
              min={0}
              name="itemPos"
              onChange={(e) => setPosition(e.target.valueAsNumber)}
            />
          </div>

          <div>
            <label className={styles.label} htmlFor="itemValue">
              PREÇO
            </label>
            <input
              className={styles.input}
              type="number"
              step="0.1"
              min={0.1}
              name="itemValue"
              onChange={(e) => setValue(e.target.valueAsNumber)}
            />
          </div>

          <div>
            <label className={styles.label} htmlFor="itemValue">
              % STRIPE
            </label>
            <input
              className={styles.input}
              type="number"
              step="0.1"
              min={0.1}
              name="itemValue"
              defaultValue={3.99}
              onChange={(e) => setTax(e.target.valueAsNumber)}
            />
          </div>

          <div>
            <label className={styles.label} htmlFor="itemValue">
              % IOF
            </label>
            <input
              className={styles.input}
              type="number"
              step="0.1"
              min={0.1}
              name="itemValue"
              defaultValue={6.38}
              onChange={(e) => setIOF(e.target.valueAsNumber)}
            />
          </div>
        </div>

        <div className={styles.fileSection}>
          <input
            type="file"
            accept=".png"
            onChange={(e) => setFile(e.target.files?.[0])}
          />
        </div>

        <div className={styles.section}>
          {loading ? (
            <button className={styles.loadingButton}>SALVANDO...</button>
          ) : (
            <button className={styles.button} onClick={() => onSubmit()}>
              {submitResponse ? submitResponse : "SALVAR"}
            </button>
          )}
        </div>
      </div>

      <div className={styles.preview}>
        <h3 className={styles.title}>PRÉVIA DO PRODUTO</h3>

        <div className={styles.content}>
          <div>
            <img className={styles.contentImage} src={image} />
          </div>

          <div className={styles.contentTitle}>
            {name ? name : "NOME DO PRODUTO"}

            <ItemDetails props={desc} />
          </div>

          <div className={styles.contentValue}>
            R$ {finalValue ? (finalValue + 0.39).toFixed(2) : 0.0}
          </div>

          <div className={styles.contentButton}>
            <button className={styles.buyButton}>COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItem;
