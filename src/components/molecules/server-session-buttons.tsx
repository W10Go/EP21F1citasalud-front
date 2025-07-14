import { createSupabaseServerClient } from "../utils/supabase-server";
import ClientSessionButtons from "./client-session-buttons";

export async function ServerSessionButtons() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return <ClientSessionButtons session={user ?? null} />;
}
