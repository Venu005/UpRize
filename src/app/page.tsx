import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <SignOutButton>
      <Button>SignOut</Button>
    </SignOutButton>
  );
}
