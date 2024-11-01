//component for rendering inventory items and actions

"use client";
import React, { useEffect, useState } from "react";
import { fetchInventoryData } from "@/app/actions/fetchInventoryData/fetchInventoryData";
import { InventoryProduct } from "../InventoryProduct";
import styles from "./AllProductContainer.module.css";

const AllProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInventoryData();
      setProducts(data);
    };
    fetchData();
  }, []);

  // Check if products array is empty
  if (products.length === 0) {
    return <div>No products to fetch!</div>;
  }

  return (
    <div className={styles.inventoryContainer}>
      {products.map((product) => (
        <InventoryProduct
          name={product.product_name}
          price={product.product_price}
          description={product.product_description}
        />
      ))}
    </div>
  );
};

export default AllProductContainer;
