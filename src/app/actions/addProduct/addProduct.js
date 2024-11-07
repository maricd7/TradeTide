//server side action for adding product in the db
"use server";
import { supabase } from "@/app/supabase";

export const addProduct = async (
  productName,
  productPrice,
  productDescription
) => {
  const { data, error } = await supabase
    .from("products")
    .upsert({
      product_name: productName,
      product_price: productPrice,
      product_description: productDescription,
    })
    .select();

  if (data) {
    console.log("Product added successfully!");
  } else if (error) {
    console.log("Errror adding product", error);
  } else {
    console.log("Error adding product!");
  }
};
