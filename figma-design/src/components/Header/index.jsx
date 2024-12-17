import { SelectBox, Img } from "./..";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className}} flex justify-center items-center py-6 sm:py-5 bg-gray-200P_01`}
    >
      <div className="container-xs flex justify-center md:px-5">
        <div className="flex w-full items-center justify-between gap-5">
          <Img
            src="images/img_header_logo.png"
            alt="Headerlogo"
            className="h-[34px] w-[64px] object-contain"
          />
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
      </div>
    </header>
  );
}
