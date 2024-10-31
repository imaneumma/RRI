"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Avatar from "@mui/joy/Avatar";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="grow m-10 items-center space-x-4 uppercase text-gray-700 relative">
      <Link
        href="/"
        className={`link px-4 py-2 border-2 hover:bg-amber-50 hover:border-2 hover:border-amber-50 ${
          pathname === "/" ? "active border-amber-50 " : "border-transparent"
        }`}
      >
        Home
      </Link>
      <Link
        href="/dashboard"
        className={`link px-4 py-2 border-2  hover:bg-amber-50 hover:border-2 hover:border-amber-50 ${
          pathname === "/dashboard"
            ? "active border-amber-50"
            : "border-transparent"
        }`}
      >
        Dashboard
      </Link>

      <Link
        href="/courses"
        className={`link px-4 py-2 border-2 border-transparent hover:bg-amber-50 hover:border-2 hover:border-amber-50 ${
          pathname === "/courses"
            ? "active border-amber-50"
            : "border-transparent"
        }`}
      >
        Courses
      </Link>
      <Link
        href="/visionboard"
        className={`link  px-4 py-2 border-2  hover:bg-amber-50 hover:border-2 hover:border-amber-50 ${
          pathname === "/visionboard"
            ? "active border-amber-50"
            : "border-transparent"
        }`}
      >
        Vision Board
      </Link>

      <Link href="/profile" className=" text-white absolute right-0 -top-2">
        <Avatar
          variant="solid"
          className="bg-amber-900  hover:bg-amber-500 border-2 border-amber-500"
          size="lg"
        />
      </Link>
    </nav>
  );
}
