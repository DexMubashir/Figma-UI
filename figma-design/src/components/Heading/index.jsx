import React, { Children } from "react";
const sizes = {
  headingxs: "text-[14px] font-bold",
  headings: "text-[16px] font-bold",
  headingmd: "text-[18px] font-bold",
  headinglg: "text-[20px] font-bold",
  headingxl: "text-[24px] font-bold md:text-[22px]",
  heading2xl: "text-[28px] font-bold md:text-[26px] sm:text-[24px]",
  heading3xl: "text-[32px] font-bold md:text-[38px] sm:text-[36px]",
};

const Heading = ({
  children,
  className = "",
  size = "headinglg",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-black-900 font-merriweathersans ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};
export { Heading };
