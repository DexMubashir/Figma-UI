import { Button, Img, Heading } from "../../components";
import HomeRow from "../../components/HomeRow";
import React, { Suspense } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const data = [
  {
    ghh7890: "#GHH7890",
    scienceCounter: "Science 2024",
    gender: "Male",
    loremipsum: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    price: "Hourly $40",
    details: "Details",
  },
  {
    ghh7890: "#GHH7890",
    scienceCounter: "Science 2024",
    gender: "Male",
    loremipsum: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    price: "Hourly $40",
    details: "Details",
  },
  {
    ghh7890: "#GHH7890",
    scienceCounter: "Science 2024",
    gender: "Male",
    loremipsum: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    price: "Hourly $40",
    details: "Details",
  },
  {
    ghh7890: "#GHH7890",
    scienceCounter: "Science 2024",
    gender: "Male",
    loremipsum: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    price: "Hourly $40",
    details: "Details",
  },
];

export default function Home1ColumnTwo() {
  return (
    <div>
      <Tabs
        className="flex flex-col items-center self-stretch"
        selectedTabClassName="!text-white-a700 border-black-900 border border-solid bg-black-900 rounded-[18px]"
        selectedTabPanelClassName="mt-[38px] !relative tab-panel--selected"
      >
        <div className="container-xs md:px-5">
          <TabList className="flex flex-wrap gap-6">
            <Tab className="px-8 py-5 text-[14px] font-bold text-black-900 sm:px-5">
              Tutoring Classes
            </Tab>
            <Tab className="px-8 py-5 text-[14px] font-bold text-black-900 sm:px-5">
              Professional Tutors
            </Tab>
          </TabList>
          {[...Array(2)].map((_, index) => (
            <TabPanel
              key={`tab-panel${index}`}
              className="absolute mt-[38px] items-center"
            >
              <div className="w-full">
                <div className="flex flex-col items-start gap-[34px]">
                  <Heading
                    size="headingxl"
                    as="h1"
                    className="text-[24px] font-bold text-black-900 md:text-[22px]"
                  >
                    Tutoring Classes
                  </Heading>
                  <div className="flex flex-col gap-8 self-stretch">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {data.map((d, index) => (
                        <HomeRow
                          {...d}
                          key={"home" + index}
                          className="border-black-900"
                        />
                      ))}
                    </Suspense>
                  </div>
                </div>
              </div>
            </TabPanel>
          ))}
          <div className="mt-[78px] flex items-center justify-center sm:flex-col">
            <Heading
              size="headingmd"
              as="h2"
              className="text-[18px] font-bold text-black-900"
            >
              Showing 04 of 16 results
            </Heading>
            <div className="flex flex-1 justify-end gap-4 sm:self-stretch">
              <Button
                color="gray_200"
                className="w-[40px] rounded-[14px] px-3.5"
              >
                <Img src="images/img_arrow_left.svg" />
              </Button>
              <Button
                color="black_900"
                size="xs"
                className="min-w-[40px] rounded-[14px] px-4 font-bold"
              >
                1
              </Button>
              <Button
                color="gray_200"
                size="xs"
                className="min-w-[40px] rounded-[14px] px-3.5 font-bold"
              >
                2
              </Button>
              <Button
                color="gray_200"
                size="xs"
                className="min-w-[40px] rounded-[14px] px-3.5 font-bold"
              >
                3
              </Button>
              <Button
                color="black_900"
                size="xs"
                className="min-w-[40px] rounded-[14px] px-3.5"
              >
                <Img src="images/img_arrow_right.svg" />
              </Button>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
