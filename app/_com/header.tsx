import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";
import MobileNavbar from "./MobileNavbar";
function Header() {
  return (
    <header className="py-8 xl:py-10 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Maher <span className="text-blue-400">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8 ">
          <Navbar />
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
