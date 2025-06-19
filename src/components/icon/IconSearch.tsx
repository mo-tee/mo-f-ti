import { SVGProps } from "react";

const IconSearch = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_280_5209)">
        <path
          d="M15 27C21.6274 27 27 21.6274 27 15C27 8.37258 21.6274 3 15 3C8.37258 3 3 8.37258 3 15C3 21.6274 8.37258 27 15 27Z"
          fill="#D8E8F8"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.66667 15C5.66667 9.84534 9.84534 5.66667 15 5.66667C20.1547 5.66667 24.3333 9.84534 24.3333 15C24.3333 20.1547 20.1547 24.3333 15 24.3333C9.84534 24.3333 5.66667 20.1547 5.66667 15ZM15 3C8.37258 3 3 8.37258 3 15C3 21.6274 8.37258 27 15 27C17.824 27 20.4201 26.0245 22.4699 24.3921L31.0777 33L33 31.0777L24.3921 22.4699C26.0245 20.4201 27 17.824 27 15C27 8.37258 21.6274 3 15 3Z"
          fill="#71787E"
        />
      </g>
      <defs>
        <clipPath id="clip0_280_5209">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconSearch;
