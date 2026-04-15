"use client";

import { LinkType } from "@/types";
import Link from "next/link";
import React from "react";



const Page = () => {
    const navLinks: LinkType[] = [
        { name: "Grid-tied Home", href: "/grid-tied", isMain: true },
        { name: "Solar", href: "/grid-tied/solar", isMain: false },
        { name: "BESS", href: "/grid-tied/bess", isMain: false },
        { name: "Grid", href: "/grid-tied/grid", isMain: false },
        { name: "DG", href: "/grid-tied/dg", isMain: false },
        { name: "Management", href: "/grid-tied/management", isMain: false },
        { name: "Residence Home", href: "/residence", isMain: true },
        { name: "Apartment", href: "/residence/apartment", isMain: false },
    ];

    return (
        <div className="flex flex-col gap-4 p-6 bg-gray-300 min-h-screen items-center">
            {navLinks.map((link) => (
                <div className="w-130" key={link.href} >
                    <LinkDiv {...link} />
                </div>
            ))}
        </div>
    );
};

export default Page;

const LinkDiv = ({ href, name, isMain }: LinkType) => {
    return (
        <div className={isMain ? "mx-0" : "mx-12"}>
            <Link
                href={href}
                className="block w-[320px] px-4 py-3 rounded-xl border bg-white text-gray-700 border-gray-300 hover:bg-blue-50 transition"
            >
                {name}
            </Link>
        </div>
    );
};