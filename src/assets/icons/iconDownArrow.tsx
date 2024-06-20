import { SVGProps } from 'react';

const DownArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.5 9.09521L12 16.5952L4.5 9.09521"
        stroke="#333333"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownArrowIcon;
