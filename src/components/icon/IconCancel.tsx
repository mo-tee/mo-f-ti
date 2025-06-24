import { SVGProps } from "react";

const IconCancel = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.16748 1.6665L18.8341 18.3332"
        stroke="#C7C7C7"
        strokeWidth="1.66667"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M18.8341 1.6665L2.16748 18.3332"
        stroke="#C7C7C7"
        strokeWidth="1.66667"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconCancel;
