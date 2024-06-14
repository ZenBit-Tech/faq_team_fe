import { SVGProps } from 'react';

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.43848 7.46094V10.4609H7.68848V15.7109H10.6885V10.4609H12.9385L13.6885 7.46094H10.6885V5.96094C10.6885 5.76203 10.7675 5.57126 10.9081 5.43061C11.0488 5.28996 11.2396 5.21094 11.4385 5.21094H13.6885V2.21094H11.4385C10.4439 2.21094 9.49009 2.60603 8.78683 3.30929C8.08356 4.01255 7.68848 4.96638 7.68848 5.96094V7.46094H5.43848Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default FacebookIcon;
