"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <section
            className="sticky left-0 top-0 flex flex-col h-screen w-fit 
            justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]"
        >
            <div className="flex flex-1 flex-col gap-6">
                {sidebarLinks.map((link) => {
                    const isActive =
                        pathname === link.route ||
                        pathname.startsWith(link.route);
                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={cn(
                                "flex items-center justify-start gap-4 p-4 rounded-lg",
                                {
                                    "bg-blue-1": isActive
                                }
                            )}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Navbar;
