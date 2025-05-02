import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    weight: ["400", "500", "600", "700", "800"],
    style: "normal",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Age Calculator",
    description: "Age Calculator made using NextJS",
    openGraph: {
        type: "website",
        title: "Age Calculator",
        description: "Age Calculator made using NextJS",
        images: [
            {
                url: "https://imgur.com/gIAJ7Stl.png",
                width: 1200,
                height: 600,
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)] selection:bg-purple-700 selection:text-slate-100">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
