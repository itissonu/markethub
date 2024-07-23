import Footer from "@/components/footer";
import Header from "@/components/Header";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "towntroops",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}  >
                <Header />
                <Navbar />
                {children}
                <Footer/>
            </body>
        </html>
    );
}
