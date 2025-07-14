import Login from "@/components/organisms/login";
import { createSupabaseServerClient } from "@/components/utils/supabase-server";

export default async function LoginPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return <Login session={user ?? null} />;
}
