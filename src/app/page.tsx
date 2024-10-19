import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignOutButton>
        <Button>SignOut</Button>
      </SignOutButton>
    </div>
  );
}
