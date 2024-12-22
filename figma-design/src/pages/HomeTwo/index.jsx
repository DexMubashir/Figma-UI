import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeTwoColumn from "./HomeTwoColumn";
import React from "react";

export default function HomeTwoPage() {
  return (
    <>
      <Helmet>
        <title>Figma Design</title>
        <meta name="description" content="Website using vite@latest" />
      </Helmet>
      <div className="flex w-full flex-col gap-20 bg-white-a700 md:gap-[60px] sm:gap-10">
        <Header />
        <HomeTwoColumn />
        <Footer />
      </div>
    </>
  );
}
