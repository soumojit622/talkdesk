import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import UserMenu from "./user-menu";
import { checkUser } from "@/lib/checkUser";

async function Header() {
  await checkUser();
  return (
    <nav className="mx-auto py-4 px-6 lg:px-12 flex justify-between items-center shadow-lg border-b-2 bg-white">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.svg"
          width="100" // Adjusted width
          height="40" // Adjusted height
          alt="Logo"
          className="h-10 w-auto object-contain" // Adjusted height in the class
        />
      </Link>

      {/* Buttons and User Menu */}
      <div className="flex items-center space-x-4">
        {/* Create Event Button */}
        <Link href="/events?create=true">
        <Button
  variant="default"
  className="flex sm:gap-2 px-2 sm:px-4 py-2 rounded-lg text-sm sm:text-base items-center bg-gradient-to-r from-violet-600 to-blue-500 text-white transition-transform transform hover:scale-105 hover:shadow-lg"
>
  <PenBox size={18} className="inline sm:hidden" /> {/* Only icon for small screens */}
  <PenBox size={18} className="hidden sm:inline" /> {/* Full button for medium+ screens */}
  <span className="hidden sm:inline">Create Event</span>
</Button>

        </Link>

        {/* Login / User Menu */}
        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button
              variant="outline"
              className="px-4 py-2 rounded-lg text-sm sm:text-base"
            >
              Login
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserMenu />
        </SignedIn>
      </div>
    </nav>
  );
}

export default Header;
