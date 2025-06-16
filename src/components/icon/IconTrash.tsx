import { SVGProps } from "react";

const IconTrash = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_599_2393)">
        <path
          d="M14.9999 18.3332H4.99992L3.33325 4.1665H16.6666L14.9999 18.3332Z"
          stroke="white"
          strokeWidth="1.66667"
          strokeLinecap="round"
        />
        <path
          d="M1.68286 4.1665H18.3495"
          stroke="white"
          strokeWidth="1.66667"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M8.34961 8.3335V14.1668"
          stroke="white"
          strokeWidth="1.66667"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M11.6829 8.3335V14.1668"
          stroke="white"
          strokeWidth="1.66667"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M14.1666 1.6665H5.83325V4.1665H14.1666V1.6665Z"
          stroke="white"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_599_2393">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconTrash;
