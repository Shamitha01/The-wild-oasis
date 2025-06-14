import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wkckusylyirwnvfxnehv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrY2t1c3lseWlyd252ZnhuZWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNzI4ODYsImV4cCI6MjA2Mzg0ODg4Nn0.4jCCsZILWUvuAQoe2G-RfZN-KuxvEquvvhCOWz6ffIw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
