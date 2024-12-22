import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";

export default function StudentProfilePage() {
  return (
    <>
      <Helmet>
        <title>Figma Design</title>
        <meta name="description" content="Website using vite@latest" />
      </Helmet>
      <div className="flex w-full flex-col gap-[944px] bg-white-a700 md:gap-[708px] sm:gap-[472px]">
        <Header />
        <Footer />
      </div>
    </>
  );
}
