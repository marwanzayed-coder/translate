import React, { useState } from "react";
import Head from "next/head";
import { Cairo } from "@next/font/google";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Lang from "@/Components/Lang";
import Word from "@/Components/Word";
import TranslateWord from "@/Components/TranslateWord";

const cairo = Cairo({ subsets: ["latin"] });

export default function Home() {
  const [step, setStep]: [number, any] = useState(1);
  const [lang, setLang]: [string, any] = useState("");
  const [text, setText]: [string, any] = useState("");
  console.log(step);
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
        <Lang setStep={setStep} setLang={setLang} />
        {step >= 2 && <Word setText={setText} setStep={setStep} />}
        {step >= 3 && <TranslateWord lang={lang} text={text} />}
        <Footer />
      </main>
    </>
  );
}
