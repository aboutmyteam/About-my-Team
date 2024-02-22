import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const caviar = localFont({
    src: [
        {
            path: "./fonts/CaviarDreams/CaviarDreams.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/CaviarDreams/CaviarDreams_Italic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "./fonts/CaviarDreams/CaviarDreams_Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/CaviarDreams/CaviarDreams_BoldItalic.ttf",
            weight: "700",
            style: "italic",
        },
    ],
    variable: "--font-caviar",
});

const geist = localFont({
    src: [
        {
            path: "./fonts/geist/Geist-Regular.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-geist",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${caviar.variable} ${geist.variable}`}>
                {children}
            </body>
        </html>
    );
}
