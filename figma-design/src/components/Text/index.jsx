import React from "react";

const sizes = {
  textxs: "text-[12px] font-normal",
  texts: "text-[14px] font-normal",
  textmd: "text-[20px] font-normal",
};

const Text = ({
  children,
  className = "",
  as,
  size = "textxs",
  ...restProps
}) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-black-900_b2 font-merriweathersans ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
