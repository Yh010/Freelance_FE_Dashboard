"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationButtons() {
  const pathname = usePathname();

  const buttonStyles = "bg-white text-black hover:bg-white  rounded-none";

  return (
    <div>
      <Button
        className={`${buttonStyles} ${
          pathname === "/Create" ? "border-black border-b-4" : ""
        }`}
      >
        <Link href="/Create">Create</Link>
      </Button>
      <Button
        className={`${buttonStyles} ${
          pathname === "/Connect" ? "border-black border-b-4" : ""
        }`}
      >
        <Link href="/Connect">Connect</Link>
      </Button>
      <Button
        className={`${buttonStyles} ${
          pathname === "/Share" ? "border-black border-b-4" : ""
        }`}
      >
        <Link href="/Share">Share</Link>
      </Button>
      <Button
        className={`${buttonStyles} ${
          pathname === "/Results" ? "border-black border-b-4" : ""
        }`}
      >
        <Link href="/Results">Results</Link>
      </Button>
    </div>
  );
}
