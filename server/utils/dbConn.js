import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.ANON_KEY,{
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    },
  }
);
