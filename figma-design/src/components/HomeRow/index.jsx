import { Button, Heading, Text, Img } from "../../components";
import React from "react";

export default function HomeRow({
  ghh7890 = "#GHH7890",
  scienceCounter = "Science 2024",
  gender = "Male",
  loremipsum = "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
  price = "Hourly $40",
  details = "Details",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch p-6 sm:p-5 border-solid bg-gray-200_01 flex-1 rounded-[32px] container-xs`}
    >
      <div className="flex w-full items-center md:flex-col">
        <div className="flex w-full flex-col items-start gap-3">
          <Text
            size="texts"
            as="p"
            className="text-[14px] font-normal text-black-900"
          >
            {ghh7890}
          </Text>
          <Heading
            size="headingxl"
            as="h4"
            className="text-[24px] font-bold text-black-900 md:text-[22px]"
          >
            {scienceCounter}
          </Heading>
          <Heading
            size="headingmd"
            as="h6"
            className="text-[18px] font-bold text-black-900"
          >
            {gender}
          </Heading>
          <div className="flex items-center gap-[9px] self-stretch">
            <Img
              src="images/img_linkedin.svg"
              alt="Image"
              className="h-[16px]"
            />
            <Text
              size="texts"
              as="p"
              className="text-[14px] font-normal text-black-900"
            >
              {loremipsum}
            </Text>
          </div>
        </div>
        <div className="flex w-full flex-col items-end gap-[18px]">
          <Heading
            size="heading2xl"
            as="h3"
            className="text-[28px] font-bold text-black-900 md:text-[26px] sm:text-[24px]"
          >
            {price}
          </Heading>
          <Button
            color="black_900"
            size="md"
            shape="round"
            className="min-w-[112px] rounded-[18px] border border-solid border-black-900 px-[31px] font-bold sm:px-5"
          >
            {details}
          </Button>
        </div>
      </div>
    </div>
  );
}
