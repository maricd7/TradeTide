import React from "react";
import styles from "./InventoryProduct.module.css";

const InventoryProduct = ({ name, price, description }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.price}>${price}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default InventoryProduct;
