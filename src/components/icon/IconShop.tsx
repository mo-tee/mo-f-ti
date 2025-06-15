import { SVGProps } from "react";

const IconShop = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.25 3.75H3.75C2.92157 3.75 2.25 4.42157 2.25 5.25V18.75C2.25 19.5784 2.92157 20.25 3.75 20.25H20.25C21.0784 20.25 21.75 19.5784 21.75 18.75V5.25C21.75 4.42157 21.0784 3.75 20.25 3.75ZM12 12.75C9.51579 12.7474 7.50258 10.7342 7.5 8.25C7.5 7.83579 7.83579 7.5 8.25 7.5C8.66421 7.5 9 7.83579 9 8.25C9 9.90685 10.3431 11.25 12 11.25C13.6569 11.25 15 9.90685 15 8.25C15 7.83579 15.3358 7.5 15.75 7.5C16.1642 7.5 16.5 7.83579 16.5 8.25C16.4974 10.7342 14.4842 12.7474 12 12.75Z"
        stroke={props.color}
        strokeWidth="1.3"
      />
    </svg>
  );
};

export default IconShop;
