import { supabase } from "@/app/supabase";

//server action for fetching products data on server side

export const fetchInventoryData = async () => {
  const { data, error } = await supabase.from("products").select();
  if (data) {
    return data;
  } else if (error) {
    console.log("Error fetching data", error);
  } else {
    console.log("Undefined error while fetching data");
  }
};
