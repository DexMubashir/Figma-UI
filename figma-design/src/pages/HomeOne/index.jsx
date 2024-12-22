import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeOneColumn from "./HomeOneColumn";
import React from "react";

export default function HomeFourPage() {
  return (
    <>
      <Helmet>
        <title>Figma Design</title>
        <meta name="description" content="Website using vite@latest" />
      </Helmet>
      <div className="w-full bg-white-a700">
        <Header />
        <HomeOneColumn />
        <Footer className="mt-[120px]" />
      </div>
    </>
  );
}
