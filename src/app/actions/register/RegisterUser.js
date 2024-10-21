"use server";
import { supabase } from "@/app/supabase";
// server action for registering a user to the app
export const registerUser = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (data) {
    console.log("Successful sign-up!");
    return data;
  } else {
    console.log("Registration unsuccessful", error);
    return error;
  }
};
