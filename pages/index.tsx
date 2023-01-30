import Head from "next/head";
import { Cairo } from "@next/font/google";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import Header from "@/Components/Header";
import { RiTranslate } from "react-icons/ri";
import CTA from "@/Components/CTA";
import HowWork from "@/Components/HowWork";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";

const cairo = Cairo({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Translate</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className={cairo.className}>
        <Header />
        <CTA />
        <HowWork />
        <Features />
        <Footer />
      </main>
    </>
  );
}
