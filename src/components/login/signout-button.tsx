import { signOut } from "@/auth";
import { LogOut } from "lucide-react";
 
export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button className="flex flex-row items-center gap-2 cursor-pointer w-full" type="submit">
        <LogOut size={16} />
        <span>Log out</span>
      </button>
    </form>
  )
}