import { SVGProps } from 'react';

const RightArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" {...props}>
    <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16z"></path>
    <path d="M16 12.138l3.862 3.862-3.862 3.862z"></path>
    <path
      fill="none"
      stroke="#fff"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeMiterlimit="4"
      strokeWidth="1.264"
      d="M12.138 16h7.724M19.862 16l-3.862-3.862M19.862 16l-3.862 3.862"
    ></path>
  </svg>
);
export default RightArrowIcon;
