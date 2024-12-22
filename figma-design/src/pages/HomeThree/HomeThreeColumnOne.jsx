import { Button, Img, Heading } from "../../components";
import HomeThreeData from "../../components/HeadingThreeData";
import React, { Suspense } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const data = [
  {
    alikhan: "Ali Khan",
    staffnoitwenty: "Staff no# I20",
    fortyEight: "4.8",
    gender: "Male",
    education: "Education",
    subject: "Subject",
    details: "Details",
  },
  {
    alikhan: "Ali Khan",
    staffnoitwenty: "Staff no# I20",
    fortyEight: "4.8",
    gender: "Male",
    education: "Education",
    subject: "Subject",
    details: "Details",
  },
  {
    alikhan: "Ali Khan",
    staffnoitwenty: "Staff no# I20",
    fortyEight: "4.8",
    gender: "Male",
    education: "Education",
    subject: "Subject",
    details: "Details",
  },
  {
    alikhan: "Ali Khan",
    staffnoitwenty: "Staff no# I20",
    fortyEight: "4.8",
    gender: "Male",
    education: "Education",
    subject: "Subject",
    details: "Details",
  },
  {
    alikhan: "Ali Khan",
    staffnoitwenty: "Staff no# I20",
    fortyEight: "4.8",
    gender: "Male",
    education: "Education",
    subject: "Subject",
    details: "Details",
  },
  {
    alikhan: "Ali Khan",
    staffnoitwenty: "Staff no# I20",
    fortyEight: "4.8",
    gender: "Male",
    education: "Education",
    subject: "Subject",
    details: "Details",
  },
];

export default function HomeThreeColumnOne() {
  return (
    <div>
      <Tabs
        className="flex flex-col items-center self-stretch"
        selectedTabClassName="!text-white-a700 border-black-900 border border-solid bg-black-900 rounded-[18px]"
        selectedTabPanelClassName="mt-10 !relative tab-panel--selected"
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
              className="absolute mt-10 items-center"
            >
              <div className="w-full">
                <div className="grid grid-cols-3 justify-cewnter gap-[42px] md:grid-cols-2 sm:grid-cols-1">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                      <HomeThreeData {...d} key={"homeThree" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </TabPanel>
          ))}
          <div className="mt-[120px] flex items-center justify-center sm:flex-col">
            <Heading
              size="headingmd"
              as="h1"
              className="text-[180px] font-bold text-black-900"
            >
              Showing 06 of 16 results
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
                className="min-w-[40px] rounded-[14px] px-3.5 font-bold"
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
                className="w-[40px] rounded-[14px] px-3.5"
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
