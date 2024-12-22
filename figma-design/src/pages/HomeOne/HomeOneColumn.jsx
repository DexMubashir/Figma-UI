import { Button, Heading, Text } from "../../components";
import React from "react";
export default function HomeOneColumn() {
  return (
    <div className="mt-[76px] flex flex-col items-center">
      <div className="container-xs flex flex-col items-start gap-[38px] md:px-5">
        <Heading
          size="headingx1"
          as="h1"
          className="text-[24px] font-bold text-black-900 md:text-[22px]"
        >
          Class Details
        </Heading>
        <div className="flex gap-10 self-stretch md:flex-col">
          <div className="flex w-[32%] flex-col items-start gap-8 rounded-[32px] bg-gray-200_01 px-10 md:w-full sm:p-5">
            <Heading
              size="headingmd"
              as="h2"
              className="text-[18px] font-bold text-black-900"
            >
              Map
            </Heading>
            <div className="mb-[264px] h-[180px] self-stretch rounded-[24px] bg-white-a700" />
          </div>
          <div className="flex-1 rounded-[32px] bg-gray-200_01 px-8 py-10 md:self-stretch sm:p-5">
            <div className="mr-2 flex flex-wrap items-center justify-between gap-5 md:mr-0">
              <Heading
                size="headingmd"
                as="h3"
                className="text-[18px] font-bold text-black-900"
              >
                Class Details
              </Heading>
              <Heading
                size="headingxs"
                as="h4"
                className="self-start text-[14px] font-bold text-black-900"
              >
                #GHH7890
              </Heading>
            </div>
            <div className="mr-4 mt-[30px] flex items-center justify-center md:mr-0">
              <div className="flex flex-col items-start gap-2">
                <Text as="p" className="text-[20px] font-bold text-black-900">
                  Gender
                </Text>
                <Heading
                  as="h5"
                  className="text-[20px] font-bold text-black-900"
                >
                  Male
                </Heading>
              </div>
              <div className="flex flex-1 flex-col items-start gap-1.5 pl-[136px] pr-14 md:px-5">
                <Text
                  as="p"
                  className="text-[12px] font-normal text-black-900_b2"
                >
                  Year ofStudy
                </Text>
                <div className="flex">
                  <Heading
                    as="h6"
                    className="text-[20px] font-bold text-black-900"
                  >
                    2024
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start gap-1.5">
                <Text
                  as="p"
                  className="text-[12px] font-normal text-black-900_b2"
                >
                  Subject
                </Text>
                <Heading
                  as="h6"
                  className="text-[20px] font-bold text-black-900"
                >
                  Science{" "}
                </Heading>
              </div>
            </div>
            <div className="mr-4 mt-[68px] flex items-start justify-center md:mr-0 sm:flex-col">
              <div className="flex flex-1 flex-col items-start gap-1.5 sm:self-stretch">
                <Text
                  as="p"
                  className="text-[12px] font-normal text-black-900_b2"
                >
                  Offering Wage
                </Text>
                <div className="flex self-stretch">
                  <Heading
                    as="h5"
                    className="text-[20px] font-bold text-black-900"
                  >
                    $40
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <Text
                  as="p"
                  className="text-[12px] font-normal text-black-900_b2"
                >
                  Time
                </Text>
                <div className="flex">
                  <Heading
                    as="h5"
                    className="text-[20px] font-bold text-black-900"
                  >
                    04 Hours
                  </Heading>
                </div>
                <div className="flex w-[16%] flex-col items-start gap-2 self-center sm:w-full">
                  <Text
                    as="p"
                    className="text-[12px] font-normal text-black-900_b2"
                  >
                    Requirement
                  </Text>
                  <Heading
                    size="headingmd"
                    as="h6"
                    className="text-[18px] font-bold leading-[22px] text-black-900"
                  >
                    <>
                      Lorem Ipsum
                      <br />
                      dolor{" "}
                    </>
                  </Heading>
                </div>
              </div>
              <div className="mt-[50px] flex flex-col items-start justify-center gap-2">
                <Text
                  as="p"
                  className="text-[12px] font-normal text-black-900_b2"
                >
                  Messages to tutors
                </Text>
                <Heading
                  as="h5"
                  className="text-[20px] font-bold leading-[25px] text-black-900"
                >
                  <>
                    Lorem Ipsum
                    <br />
                    dolor{" "}
                  </>
                </Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 self-stretch">
          <Button
            color="white_A700"
            size="2xl"
            shape="round"
            className="min-w-[170px] rounded-[18px] border border-solid border-black-900 px-[33px] font-bold text-black-900 sm:px-5"
          >
            Save
          </Button>
          <Button
            color="black_900"
            size="2xl"
            shape="round"
            className="min-w-[170px] rounded-[18px] border border-solid border-black-900 px-[33px] font-bold sm:px-5"
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}
