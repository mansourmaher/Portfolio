"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

const isSelected = (pathname, currentPath) => {
  return pathname === currentPath
    ? "text-blue-400 border-b-2 border-blue-500"
    : "capitalize font-medium hover:text-blue-500 transition-all";
};

function Navbar() {
  return (
    <div className="gap-12 flex">
      {Links.map((link, index) => {
        return (
          <Link
            className={isSelected(usePathname(), link.path)}
            key={index}
            href={link.path}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}

export default Navbar;
