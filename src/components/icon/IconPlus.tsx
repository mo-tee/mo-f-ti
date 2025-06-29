import { SVGProps } from "react";

const IconPlus = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="16.4998" cy="15.9998" r="13.3333" fill="#0D80F2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8335 14.667V9.3335H15.1668V14.667H9.8335V17.3337H15.1668V22.6671H17.8335V17.3337H23.1671V14.667H17.8335Z"
        fill="white"
      />
    </svg>
  );
};

export default IconPlus;
