import { Heading } from "../../components";
import React from "react";

export default function HomeTwoColumn() {
  return (
    <div className="flex flex-col items-center">
      <div className="container-xs flex flex-col items-start gap-[38px] md:px-5">
        <Heading
          size="headingxl"
          as="h1"
          className="text-[24px] font-bold text-black-900 md:text-[22px]"
        >
          Location
        </Heading>
        <div className="h-[720px] self-stretch rounded-[40px] bg-gray-200_01" />
      </div>
    </div>
  );
}
