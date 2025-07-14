import Dashboard from "@/components/organisms/dashboard";
import { createSupabaseServerClient } from "@/components/utils/supabase-server";
import NavMob from "@/components/molecules/navbarmobile";
import Nav from "@/components/molecules/navbar";

export default async function LoginPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <div className="block md:hidden">
        <NavMob />
      </div>
      <div className="hidden md:block">
        <Nav />
      </div>
      <Dashboard session={user ?? null} />
    </>
  );
}
