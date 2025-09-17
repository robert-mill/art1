import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import './globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';


const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const gambarino = localFont({
  src: "./gambarino.woff2",
  display: "swap",
  variable: "--font-gambarino",
});





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${gambarino.variable} antialiased`}>
      <body className='bg-[#070815] text-white'>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
        </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
