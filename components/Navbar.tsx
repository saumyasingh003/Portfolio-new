"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* ================= TOP HEADER ================= */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-black">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

          {/* Logo always visible */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Saumya Logo"
              width={140}
              height={40}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  text-sm font-medium uppercase tracking-widest text-black
                  relative
                  after:absolute after:left-0 after:-bottom-2 after:h-[1px]
                  after:w-0 after:bg-black after:transition-all
                  hover:after:w-full
                "
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-black bg-white md:hidden">
        <div className="flex items-center justify-around py-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
                text-[11px]
                font-medium
                uppercase
                tracking-wider
                text-black
              "
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
