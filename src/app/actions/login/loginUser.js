"use server";
import { supabase } from "@/app/supabase";
// server action for signin in a user to the app
export const loginUser = async ({ email, password }) => {
  const { user, session, error } = await supabase.auth.signIn({
    email: email,
    password: password,
  });

  if (data) {
    console.log("Successful login!");
    return data;
  } else {
    console.log("Login unsuccessful", error);
    return error;
  }
};
