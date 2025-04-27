import { Button } from "@/components/ui/button";
import { Rss } from "lucide-react";

export default function Page() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col items-center gap-4">
        <Rss size={40} />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          RSS Reader
        </h1>
      </div>

      <div>
        <Button>Log in</Button>
      </div>
    </div>
  );
}
