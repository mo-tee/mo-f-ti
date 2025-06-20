import { SVGProps } from "react";

const IconDiary = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_543_5343)">
        <mask id="path-1-inside-1_543_5343" fill="white">
          <path d="M1.6665 4.16683C1.6665 3.70659 2.0396 3.3335 2.49984 3.3335H17.4998C17.9601 3.3335 18.3332 3.70659 18.3332 4.16683V16.6668C18.3332 17.5873 17.587 18.3335 16.6665 18.3335H3.33317C2.4127 18.3335 1.6665 17.5873 1.6665 16.6668V4.16683Z" />
        </mask>
        <path
          d="M1.6665 4.16683C1.6665 3.70659 2.0396 3.3335 2.49984 3.3335H17.4998C17.9601 3.3335 18.3332 3.70659 18.3332 4.16683V16.6668C18.3332 17.5873 17.587 18.3335 16.6665 18.3335H3.33317C2.4127 18.3335 1.6665 17.5873 1.6665 16.6668V4.16683Z"
          stroke="#525252"
          strokeWidth="3.33333"
          mask="url(#path-1-inside-1_543_5343)"
        />
        <mask id="path-2-inside-2_543_5343" fill="white">
          <path d="M1.6665 4.16683C1.6665 3.70659 2.0396 3.3335 2.49984 3.3335H17.4998C17.9601 3.3335 18.3332 3.70659 18.3332 4.16683V8.3335H1.6665V4.16683Z" />
        </mask>
        <path
          d="M1.6665 4.16683C1.6665 3.70659 2.0396 3.3335 2.49984 3.3335H17.4998C17.9601 3.3335 18.3332 3.70659 18.3332 4.16683V8.3335H1.6665V4.16683Z"
          stroke="#525252"
          strokeWidth="3.33333"
          mask="url(#path-2-inside-2_543_5343)"
        />
        <path
          d="M5.8335 2.5V5"
          stroke="#525252"
          strokeWidth="1.66667"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.1665 2.5V5"
          stroke="#525252"
          strokeWidth="1.66667"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_543_5343">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconDiary;
