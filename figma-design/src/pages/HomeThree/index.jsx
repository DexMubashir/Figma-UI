import { Helmet } from "react-helmet";
import { SelectBox, Img, Heading } from "../../components";
import Footer from "../../components/Footer";
import HomeThreeColumnOne from "./HomeThreeColumnOne";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function HomeThreePage() {
  return (
    <>
      <Helmet>
        <title>Figma Design</title>
        <meta name="description" content="Website created using vite@latest" />
      </Helmet>
      <div className="flex w-full flex-col gap-20 bg-white-a700 md:gap-[60px] sm:gap-10">
        <header className="flex items-center justify-center bg-gray-200_01 py-6 sm:py-5">
          <div className="container-xs flex items-center justify-between gap-5 md:px-5">
            <Heading
              size="headingxl"
              as="h4"
              className="text-[24px] font-bold uppercase text-black-900 md:text-[22px]"
            >
              Logo
            </Heading>
            <SelectBox
              shape="round"
              indicator={
                <Img
                  src="images/img_vector.svg"
                  alt="Vector"
                  className="h-[6px] w-[10px]"
                />
              }
              name="vector"
              placeholder={`EN`}
              options={dropDownOptions}
              className="w-[8%] gap-8 rounded-[12px] border-[0.5px] border-solid border-black-900_7f px-3.5 uppercase"
            />
          </div>
        </header>
        <HomeThreeColumnOne />
        <Footer />
      </div>
    </>
  );
}
