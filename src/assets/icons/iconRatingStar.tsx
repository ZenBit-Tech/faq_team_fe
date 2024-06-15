import { SVGProps } from 'react';

const RatingStarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 20.5C15.5228 20.5 20 16.0228 20 10.5C20 4.97715 15.5228 0.5 10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 16.0228 4.47715 20.5 10 20.5ZM8.86127 7.86335L8.73019 8.09849C8.58621 8.35677 8.51422 8.48591 8.40198 8.57112C8.28973 8.65633 8.14994 8.68796 7.87035 8.75122L7.61581 8.80881C6.63195 9.03142 6.14001 9.14273 6.02297 9.51909C5.90593 9.89546 6.2413 10.2876 6.91204 11.072L7.08557 11.2749C7.27617 11.4978 7.37147 11.6092 7.41435 11.7471C7.45722 11.885 7.44281 12.0336 7.41399 12.331L7.38776 12.6018C7.28635 13.6482 7.23565 14.1715 7.54206 14.4041C7.84847 14.6367 8.30907 14.4246 9.23026 14.0005L9.46859 13.8907C9.73037 13.7702 9.86126 13.7099 10 13.7099C10.1387 13.7099 10.2696 13.7702 10.5314 13.8907L10.7697 14.0005C11.6909 14.4246 12.1515 14.6367 12.4579 14.4041C12.7644 14.1715 12.7136 13.6482 12.6122 12.6018L12.586 12.331C12.5572 12.0336 12.5428 11.885 12.5857 11.7471C12.6285 11.6092 12.7238 11.4978 12.9144 11.2749L13.088 11.072C13.7587 10.2876 14.0941 9.89546 13.977 9.51909C13.86 9.14273 13.3681 9.03142 12.3842 8.80881L12.1296 8.75122C11.8501 8.68796 11.7103 8.65633 11.598 8.57112C11.4858 8.48592 11.4138 8.35678 11.2698 8.0985L11.1387 7.86335C10.6321 6.95445 10.3787 6.5 10 6.5C9.62126 6.5 9.36792 6.95446 8.86127 7.86335Z"
      fill="#333333"
    />
  </svg>
);

export default RatingStarIcon;