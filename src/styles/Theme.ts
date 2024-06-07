type Color = {
  greyish_red: string;
  pastel_green: string;
  black: string;
  border: string;
  gray: string;
  white: string;
  for_card_bg: string;
  for_tables: string;
  error_red: string;
  error_light_red: string;
  green_success: string;
  error_tablet: string;
  overlay_black: string;
};

type Breakpoint = {
  mobile: string;
  tablet: string;
  desktop: string;
};

type FontSize = {
  sm: string;
  md: string;
  lg: string;
  extraLg: string;
  extraSm: string;
  xxl: string;
};

type FontWeight = {
  regular: string;
  medium: string;
  semibold: string;
  bold: string;
};

type FontNames = {
  urbanist: string;
  spaceGrotesk: string;
  sourceSerifPro: string;
  quicksand: string;
  inter: string;
  playfairDisplaySC: string;
  playfairDisplay: string;
  dmSans: string;
};

export type Theme = {
  colors: Color;
  transition: { main: string };
  breakpoint: Breakpoint;
  fontSize: FontSize;
  fontNames: FontNames;
  fontWeight: FontWeight;
};

export const theme: Theme = {
  colors: {
    greyish_red: '#edeae9',
    pastel_green: '#e3eee2',
    black: '#333',
    border: 'rgba(0, 0, 0, 0.24)',
    gray: '#6d6b6b',
    white: '#fff',
    for_card_bg: 'rgba(237, 234, 233, 0.4)',
    for_tables: 'rgba(237, 234, 233, 0.5)',
    error_red: '#de506f',
    error_light_red: '#ffdfe6',
    green_success: '#36b37e',
    error_tablet: '#ff4b4b',
    overlay_black: 'rgba(0, 0, 0, 0.6)',
  },
  transition: {
    main: '250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)',
  },
  breakpoint: {
    mobile: '450px',
    tablet: '880px',
    desktop: '1440px',
  },
  fontSize: {
    extraSm: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    extraLg: '28px',
    xxl: '40px',
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  fontNames: {
    urbanist: 'Urbanist',
    spaceGrotesk: 'Space Grotesk',
    sourceSerifPro: 'Source Serif Pro',
    quicksand: 'Quicksand',
    inter: 'Inter',
    playfairDisplaySC: 'Playfair Display SC',
    playfairDisplay: 'Playfair Display',
    dmSans: 'DM Sans',
  },
};
