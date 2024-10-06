"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
];

function MobileNavbar() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="block xl:hidden">
        <Menu size={32} />
      </SheetTrigger>

      <SheetContent className=" p-4">
        <div className=" mt-16 text-center ">
          <h1 className="text-4xl font-semibold text-white">
            Maher <span className="text-blue-500">.</span>
          </h1>
          <p className="mt-2 text-sm text-white/50">Frontend Developer and UI/UX Designer</p>

          <div className="mt-16">
            {Links.map((link) => {
              return (
                <Link href={link.path} key={link.name}>
                  <span
                    className={`${
                      pathname === link.path &&
                      "text-blue-500 capitalize border-b-2 "
                    } block text-2xl py-4 border-blue-400 hover:text-blue-200 text-white`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavbar;
