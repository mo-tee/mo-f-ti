import { SVGProps } from "react";

const IconCoin = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_357_2327)">
        <path
          d="M10.0003 18.3332C14.6027 18.3332 18.3337 14.6022 18.3337 9.99984C18.3337 5.39746 14.6027 1.6665 10.0003 1.6665C5.39795 1.6665 1.66699 5.39746 1.66699 9.99984C1.66699 14.6022 5.39795 18.3332 10.0003 18.3332Z"
          fill="#FFD493"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.52758 9.99998L7.22202 12.7777H9.07387L9.99979 9.99998H9.99981L10.9257 12.7777H12.7776L13.472 9.99998H15.0924V8.74998H13.7845L14.1665 7.22217H12.7776L12.3956 8.74998H11.0357L10.4628 7.22217H9.53683L8.9639 8.74998H7.60323L7.22202 7.22217H5.83313L6.21508 8.74998H4.90723V9.99998H6.52758ZM7.91512 9.99998L8.14794 10.9331V10.9259L8.49515 9.99998H7.91512ZM11.5044 9.99998L11.8516 10.9259L12.0831 9.99998H11.5044Z"
          fill="#FFB951"
        />
      </g>
      <defs>
        <clipPath id="clip0_357_2327">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconCoin;
