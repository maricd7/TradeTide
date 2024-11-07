//component for rendering form for adding products

"use client";
import React, { useRef } from "react";
import styles from "./AddProductForm.module.css";
import { Button } from "../ui";
import { addProduct } from "@/app/actions/addProduct/addProduct";

const AddProductForm = () => {
  const productNameRef = useRef();
  const productPriceRef = useRef();
  const productDescriptionRef = useRef();

  const handleAddProductSubmit = async (e) => {
    e.preventDefault();

    //defining arguments
    const name = productNameRef.current.value;
    const price = productPriceRef.current.value;
    const description = productDescriptionRef.current.value;

    if (name.length && price.length && description.length) {
      const data = await addProduct(name, price, description);
      if (data) {
        console.log(data);
      }
    } else {
      console.log("Error adding product : Please fill out all fields");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Add New Product</h2>
      <form onSubmit={(e) => handleAddProductSubmit(e)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="productName" className={styles.label}>
            Product Name
          </label>
          <input
            ref={productNameRef}
            type="text"
            id="productName"
            className={styles.input}
            placeholder="Enter product name"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price" className={styles.label}>
            Price
          </label>
          <input
            ref={productPriceRef}
            type="number"
            id="price"
            className={styles.input}
            placeholder="Enter price"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>
            Description
          </label>
          <textarea
            ref={productDescriptionRef}
            id="description"
            className={styles.textarea}
            placeholder="Enter product description"
          ></textarea>
        </div>
        <Button text="Add Product" type="submit" />
      </form>
    </div>
  );
};

export default AddProductForm;
