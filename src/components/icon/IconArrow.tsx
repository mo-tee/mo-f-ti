import { SVGProps } from "react";

const IconArrow = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.332 15L18.332 10L13.332 5"
        stroke={props.color}
        strokeWidth="1.66667"
        strokeLinecap="square"
      />
      <path
        d="M18.3327 10.8333C18.7929 10.8333 19.166 10.4602 19.166 10C19.166 9.53976 18.7929 9.16667 18.3327 9.16667V10.8333ZM1.66602 9.16667H0.832682V10.8333H1.66602V9.16667ZM18.3327 10V9.16667H1.66602V10V10.8333H18.3327V10Z"
        fill={props.color}
      />
    </svg>
  );
};

export default IconArrow;
