"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, BarChart, Users, Clock } from "lucide-react";
import { BarLoader } from "react-spinners";
import { useUser } from "@clerk/nextjs";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: BarChart },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/meetings", label: "Meetings", icon: Users },
  { href: "/availability", label: "Availability", icon: Clock },
];

export default function AppLayout({ children }) {
  const pathname = usePathname();
  const { isLoaded } = useUser();

  return (
    <>
      {!isLoaded && <BarLoader width={"100%"} color="#9d4edd" />}
      <div className="flex flex-col h-screen bg-gradient-to-b from-violet-50 to-white md:flex-row">
        {/* Sidebar for medium screens and up */}
        <aside className="hidden md:block w-64 bg-white shadow-lg rounded-lg p-4">
          <nav className="mt-8">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-4 text-gray-800 rounded-md ${
                      pathname === item.href
                        ? "bg-violet-100 text-violet-800 font-semibold"
                        : ""
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3 text-violet-600" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <header className="flex flex-col items-center mb-6">
            <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 text-center w-full">
              {navItems.find((item) => item.href === pathname)?.label ||
                "Dashboard"}
            </h2>
            {/* Big Underline with Gradient */}
            <div className="w-1/3 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mt-2 rounded"></div>
            {/* Small Underline with Gradient
            <div className="w-1/5 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mt-1 rounded"></div> */}
          </header>
          <div className="rounded-lg p-6">{children}</div>
        </main>

        {/* Bottom tabs for small screens */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-lg">
          <ul className="flex justify-around">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex flex-col items-center py-2 px-4 ${
                    pathname === item.href
                      ? "text-violet-600 font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  <item.icon className="w-6 h-6 text-violet-600" />
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
