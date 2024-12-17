import { Heading, Button, Img } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-end py-9 sm:py-5 bg-gray-200_01`}
    >
      <div className="container-xs mt-3.5 flex justify-center px-14 md:px-5">
        <div className="flex w-[38%] flex-col items-center gap-7 md:w-full">
          <div className="mx-[54px] flex items-end justify-between gap-5 self-stretch md:mx-0">
            <a href="Home" target="_blank" rel="noreferrer">
              <Heading
                size="headings"
                as="h6"
                className="text-[16px] font-bold text-black-900"
              >
                Home
              </Heading>
            </a>
            <div className="relative h-[108px] w-[40%] self-center">
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-6">
                <Heading
                  size="heading3xl"
                  as="h1"
                  className="self-end text-[40px] font-bold uppercase text-black-900 md:text-[38px] sm:text-[36px]"
                >
                  Logo
                </Heading>
                <a href="About" target="_blank" rel="noreferrer">
                  <Heading
                    size="headings"
                    as="h6"
                    className="text-[16px] font-bold text-black-900"
                  >
                    About
                  </Heading>
                </a>
              </div>
              <a
                href="Blog"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-[-1.72px] right-[-1.03px] m-auto"
              >
                <Heading
                  size="headings"
                  as="h6"
                  className="text-[16px] font-bold text-black-900"
                >
                  Blog
                </Heading>
              </a>
            </div>
            <a href="Contact" target="_blank" rel="noreferrer">
              <Heading
                size="headings"
                as="h6"
                className="text-[16px] font-bold text-black-900"
              >
                Contact
              </Heading>
            </a>
          </div>
          <div className="flex w-[46%] justify-between gap-5 md:w-full">
            <Button
              shape="circle"
              className="w-[40px] rounded-[20px] border-[0.75px] border-solid border-black-900 px-2"
            >
              <Img src="images/img_facebook.svg" />
            </Button>
            <Button
              shape="circle"
              className="w-[40px] rounded-[20px] border-[0.75px] border-solid border-balck-900 px-2"
            >
              <Img src="images/img_trash.svg" />
            </Button>
            <Button
              shape="circle"
              className="w-[40px] rounded-[20px] border-[0.75px] border-solid border-black-900 px-2.5"
            >
              <Img src="images/img_link.svg" />
            </Button>
          </div>
          <Heading
            size="headings"
            as="h6"
            className="text-[16px] font-bold text-black-900"
          >
            @ 2025 All right reserved. Lorem ipsum dolor sit amet.
          </Heading>
        </div>
      </div>
    </footer>
  );
}
