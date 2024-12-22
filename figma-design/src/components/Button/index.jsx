import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[18px]",
  circle: "rounded-[50%]",
};

const variants = {
  fill: {
    white_A700: "bg-white-a700",
    black_900: "bg-black-900 text-white-a700",
    gray_200: "bg-gray-200 text-gray-600",
    gray_200_01: "bg-gray-200_01",
  },
};

const sizes = {
  lg: "h-[46px] px-[34px] text-[14px]",
  "2xl": "h-[54px] px-[34px] text-[14px]",
  xs: "h-[40px] px-4 text-[18px]",
  xl: "h-[48px] px-3",
  md: "h-[42px] px-8 text-[14px]",
  sm: "h-[40px] px-3.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "gray_200_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["lg", "2xl", "xs", "xl", "md", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "white_A700",
    "black_900",
    "gray_200",
    "gray_200_01",
  ]),
};
export { Button };
