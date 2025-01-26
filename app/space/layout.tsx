import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

export default function SpaceLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen w-screen flex">
            <Sidebar />
            {children}
        </div>
    );
}