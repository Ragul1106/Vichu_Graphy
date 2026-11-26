
import { redirect } from "next/navigation";
import { createClient } from "./server";

export async function requireAdmin() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/admin/login");
  }

  const allowedEmails = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);

  if (!user.email || !allowedEmails.includes(user.email.toLowerCase())) {
    await supabase.auth.signOut();
    redirect("/admin/login?error=unauthorized");
  }

  return user;
}
