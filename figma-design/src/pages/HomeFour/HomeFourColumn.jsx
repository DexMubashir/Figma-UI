import { Button, Heading, Text, Img } from "../../components";
import React from "react";

export default function HomeFourColumn() {
  return (
    <div className="mt-[76px] flex flex-col items-center">
      <div className="container-xs flex flex-col items-start gap-[38px] md:px-5">
        <Heading
          size="headingx1"
          as="h1"
          className="text-[24px] font-bold text-black-900 md:text-[22px]"
        >
          Tutor Details
        </Heading>

        <div className="flex gap-10 self-stretch md:flex-col">
          <div className="flex w-[32%] flex-col items-center rounded-[32px] bg-gray-200_01 p-10 md:w-full sm:p-5">
            <div className="h-[240px] w-[240px] rounded-[120px] bg-white-a700" />
            <div className="mt-[22px] flex items-center gap-2">
              <Img
                src="images/img_signal.svg"
                alt="Signal"
                className="h-[20px]"
              />
              <Text
                size="textmd"
                as="p"
                className="text-[20px] font-normal text-black-900"
              >
                4.8
              </Text>
            </div>
            <Button
              color="black-900"
              size="md"
              shape="rounded"
              className="mb-[124px] mt-9 min-w-[136px] rounded-[18px] border border-solid border-black-900 px-[33px] font-bold sm:px-5"
            >
              Verified
            </Button>
          </div>

          <div className="flex-1 rounded-[32px] bg-gray-200_01 px-[30px] py-10 md:self-stretch sm:p-5">
            <div className="mb-[118px]">
              <div className="mr-2 flex flex-wrap items-center justify-between gap-5 md:mr-0">
                <Heading
                  size="headingmd"
                  as="h2"
                  className="text-[18px] font-bold text-black-900"
                >
                  Other Details
                </Heading>
                <Heading
                  size="headingxs"
                  as="h3"
                  className="self-start text-[14px] font-bold text-black-900"
                >
                  Staff no# I24
                </Heading>
              </div>
              <div className="mr-4 mt-[30px] flex justify-center md:mr-0">
                <div className="flex flex-1 flex-col items-start gap-1.5">
                  <Text as="p" className="text-[12px] font-bold text-black-900">
                    Name
                  </Text>
                  <Heading
                    as="h4"
                    className="text-[20px] font-bold text-black-900"
                  >
                    Ali Khan
                  </Heading>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Text
                    as="p"
                    className="text-[12px] font-normal text-black-900_b2"
                  >
                    Gender
                  </Text>
                  <Heading
                    as="h5"
                    className="text-[20px] font-bold text-black-900"
                  >
                    Male
                  </Heading>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Text
                    as="p"
                    className="text-[12px] font-normal text-black-900_b2"
                  >
                    Education
                  </Text>
                  <Heading
                    as="h6"
                    className="text-[20px] font-bold text-black-900"
                  >
                    Bachelor's in Computer Science
                  </Heading>
                </div>
              </div>
              <div className="mr-4 mt-[68px] flex items-start justify-center md:mr-0 sm:flex-col">
                <div className="flex flex-1 flex-col items-start gap-2 sm:self-stretch">
                  <Text
                    as="p"
                    className="text-[12px] font-normal text-black-900_b2"
                  >
                    Subjects Taught
                  </Text>
                  <Heading
                    as="h5"
                    className="text-[20px] font-bold text-black-900"
                  >
                    Mathematics, Physics
                  </Heading>
                </div>
                <div className="flex flex-col items-start gap-1.5">
                  <Text
                    as="p"
                    className="text-[12px] font-normal text-black-900_b2"
                  >
                    Expected Wage
                  </Text>
                  <Heading
                    as="h6"
                    className="text-[20px] font-bold text-black-900"
                  >
                    $80/hr
                  </Heading>
                </div>
                <div className="flex w-[16%] flex-col items-start gap-2.5 self-center sm:w-full">
                  <Text
                    as="p"
                    className="text-[12px] font-normal text-black-900_b2"
                  >
                    Available Time
                  </Text>
                  <Heading
                    as="h6"
                    className="text-[18px] font-bold text-black-900"
                  >
                    9:00 AM - 5:00 PM
                  </Heading>
                </div>
                <div className="flex flex-1 flex-col items-start gap-2 sm:self-stretch">
                  <Text
                    as="p"
                    className="text-[12px] font-normal text-black-900_b2"
                  >
                    Location
                  </Text>
                  <Heading
                    as="h5"
                    className="text-[20px] font-bold leading-[25px] text-black-900"
                  >
                    <>
                      Lorem ipsum dolor sit amet
                      <br />
                      consectetur
                    </>
                  </Heading>
                </div>
                <div className="flex flex-1 flex-col items-start gap-2 sm:self-stretch">
                  <Text
                    as="p"
                    className="text-[12px] font-normal text-black-900_b2"
                  >
                    Message of Parent/Student
                  </Text>
                  <Heading
                    as="h5"
                    className="text-[20px] font-bold leading-[25px] text-black-900"
                  >
                    <>
                      Lorem ipsum dolor sit amet
                      <br />
                      consectetur
                    </>
                  </Heading>
                </div>
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
            Hire
          </Button>
        </div>
      </div>
    </div>
  );
}
