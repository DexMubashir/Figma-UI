import { Button, Heading, Text, Img } from "../../components";
import React from "react";

export default function HomeThreeData({
  alikhan = "Ali Khan",
  staffnoitwenty = "Staff no# I20",
  fortyEight = "3.8",
  gender = "Male",
  education = "Education",
  subject = "Subject",
  details = "Details",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full p-8 sm:p-5 bg-gray-200_01`}
    >
      <div className="mt-4 flex w-[70%] flex-col items-end rounded-[110px] bg-white-a700 p-3">
        <Button
          color="white_A700"
          size="xl"
          shape="circle"
          className="mb-[148px] rounded-[24px] border-2 border-solid border-gray-200_01 px-3"
        >
          <Img src="images/img_television.svg" />
        </Button>
      </div>
      <Heading
        size="headingxl"
        as="h4"
        className="mt-3 text-[24px] font-bold text-black-900"
      >
        {alikhan}
      </Heading>
      <Text as="p" className="text-[12px] font-normal text-black-900">
        "staffnoitwenty"
      </Text>
      <div className="mt-1 flex items-center gap-1">
        <Img
          src="images/img_signal.svg"
          alt="Image"
          className="h-[14px] self-start"
        />
        <Text as="p" className="text-[12px] font-normal text-black-900">
          {fortyEight}
        </Text>
      </div>
      <Heading
        as="h5"
        className="mt-[26px] text-[20px] font-bold text-black-900"
      >
        {gender}
      </Heading>
      <Heading as="h5" className="mt-2 text-[20px] font-bold text-black-900">
        {education}
      </Heading>
      <Heading as="h5" className="mt-2.5 text-[20px] font-bold text-black-900">
        {subject}
      </Heading>
      <Button
        color="black_900"
        size="md"
        shape="round"
        className="mt-3 min-w-[112px] rounded-[18px] border-solid border-black-900 ox-[13px] font-bold sm:px-5"
      >
        {details}
      </Button>
    </div>
  );
}
