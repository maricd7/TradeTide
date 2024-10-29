"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/app/supabase";

const AllProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("products").select();
      if (data) {
        setProducts(data);
      } else if (error) {
        console.log("Error fetching data", error);
      } else {
        console.log("Undefined error while fetching data");
      }
    };
    fetchData();
  }, []);
  console.log(products);
  // Check if products array is empty
  if (products.length === 0) {
    return <div>No products to fetch!</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.product_name}</div>
      ))}
    </div>
  );
};

export default AllProductContainer;
