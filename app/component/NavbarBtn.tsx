import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function NavbarBtn(): React.ReactElement {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) return <p>please wait...</p>;

  return isSignedIn ? (
    <div className="flex items-center gap-4">
      <Link href="/Dashboard/my-diary">Create Diary</Link>
      <Link href="/Dashboard">My-diary</Link>
      <UserButton afterSignOutUrl="/" />
    </div>
  ) : (
    <Link href="/Sign-In">Sign-In</Link>
  );
}
