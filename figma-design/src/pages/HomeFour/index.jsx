import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeFourColumn from "./HomeFourColumn";
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
        <HomeFourColumn />
        <Footer className="mt-[150px]" />
      </div>
    </>
  );
}
