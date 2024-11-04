//component for rendering inventory items and actions

"use client";
import React, { useEffect, useState } from "react";
import { fetchInventoryData } from "@/app/actions/fetchInventoryData/fetchInventoryData";
import { InventoryProduct } from "../InventoryProduct";
import styles from "./AllProductContainer.module.css";
import { MainHeading } from "../ui";
import { useAuthContext } from "@/app/contexts/AuthContext";

const AllProductContainer = () => {
  const [products, setProducts] = useState([]);
  const user = useAuthContext();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInventoryData();
      setProducts(data);
    };
    fetchData();
    console.log(user, "user");
  }, []);

  // Check if products array is empty
  if (products.length === 0) {
    return <div>No products to fetch!</div>;
  }

  return (
    <div className={styles.inventoryContainer}>
      <MainHeading text="Inventory" />
      {products.map((product) => (
        <InventoryProduct
          key={product.id}
          name={product.product_name}
          price={product.product_price}
          description={product.product_description}
        />
      ))}
    </div>
  );
};

export default AllProductContainer;
