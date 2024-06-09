import { css } from '@emotion/react';
import 'modern-normalize';
import dmSansRegular from 'src/fonts/DMSans-Regular.woff';
import dmSansRegularSecond from 'src/fonts/DMSans-Regular.woff2';
import dmSansMedium from 'src/fonts/DMSans-Medium.woff';
import dmSansMediumSecond from 'src/fonts/DMSans-Medium.woff2';
import dmSansBold from 'src/fonts/DMSans-Bold.woff';
import dmSansBoldSecond from 'src/fonts/DMSans-Bold.woff2';
import playfairDisplayRegular from 'src/fonts/PlayfairDisplay-Regular.woff';
import playfairDisplayRegularSecond from 'src/fonts/PlayfairDisplay-Regular.woff2';
import playfairDisplayMedium from 'src/fonts/Playfair Display Medium.woff';
import playfairDisplayMediumSecond from 'src/fonts/Playfair Display Medium.woff2';
import playfairDisplayBold from 'src/fonts/PlayfairDisplay-Bold.woff';
import playfairDisplayBoldSecond from 'src/fonts/PlayfairDisplay-Bold.woff2';
import playfairDisplaySemiBold from 'src/fonts/PlayfairDisplay-SemiBold.ttf';
import playfairDisplaySCBold from 'src/fonts/PlayfairDisplaySC-Bold.woff';
import playfairDisplaySCBoldSecond from 'src/fonts/PlayfairDisplaySC-Bold.woff2';
import interRegular from 'src/fonts/Inter-Regular.woff';
import interRegularSecond from 'src/fonts/Inter-Regular.woff2';
import interSemiBold from 'src/fonts/Inter-SemiBold.woff2';
import interSemiBoldSecond from 'src/fonts/Inter-SemiBold.woff';
import quicksandMedium from 'src/fonts/Quicksand-Medium.woff';
import quicksandMediumSecond from 'src/fonts/Quicksand-Medium.woff2';
import sourceSerifProRegular from 'src/fonts/SourceSerifPro-Regular.woff';
import sourceSerifProRegularSecond from 'src/fonts/SourceSerifPro-Regular.woff2';
import sourceSerifProSemiBold from 'src/fonts/SourceSerifPro-SemiboldIt.woff';
import sourceSerifProSemiBoldSecond from 'src/fonts/SourceSerifPro-SemiboldIt.woff2';
import spaceGroteskMedium from 'src/fonts/SpaceGrotesk-Medium.woff';
import spaceGroteskMediumSecond from 'src/fonts/SpaceGrotesk-Medium.woff2';
import urbanistRegular from 'src/fonts/Urbanist-Regular.woff';
import urbanistRegularSecond from 'src/fonts/Urbanist-Regular.woff2';
import { theme } from './theme';

export const globalStyles = css`
  body {
    overflow: auto;
    font-family: ${theme.fontNames.dmSans}, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  button {
    display: block;
    cursor: pointer;
    border: none;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  html {
    scroll-behavior: smooth;
  }

  @font-face {
    font-family: ${theme.fontNames.dmSans};
    src: url(${dmSansRegular}), url(${dmSansRegularSecond});
    font-weight: ${theme.fontWeight.regular};
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: ${theme.fontNames.dmSans};
    src: url(${dmSansMedium}), url(${dmSansMediumSecond});
    font-weight: ${theme.fontWeight.medium};
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: ${theme.fontNames.dmSans};
    src: url(${dmSansBold}), url(${dmSansBoldSecond});
    font-weight: ${theme.fontWeight.bold};
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: ${theme.fontNames.playfairDisplay};
    src: url(${playfairDisplayRegular}), url(${playfairDisplayRegularSecond});
    font-weight: ${theme.fontWeight.regular};
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: ${theme.fontNames.playfairDisplay};
    src: url(${playfairDisplayMedium}), url(${playfairDisplayMediumSecond});
    font-weight: ${theme.fontWeight.medium};
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: ${theme.fontNames.playfairDisplay};
    src: url(${playfairDisplaySemiBold});
    font-weight: ${theme.fontWeight.semibold};
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: ${theme.fontNames.playfairDisplay};
    src: url(${playfairDisplayBold}), url(${playfairDisplayBoldSecond});
    font-weight: ${theme.fontWeight.bold};
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: ${theme.fontNames.playfairDisplaySC};
    src: url(${playfairDisplaySCBold}), url(${playfairDisplaySCBoldSecond});
    font-weight: ${theme.fontWeight.bold};
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: ${theme.fontNames.inter};
    src: url(${interRegular}), url(${interRegularSecond});
    font-weight: ${theme.fontWeight.regular};
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: ${theme.fontNames.inter};
    src: url(${interSemiBold}), url(${interSemiBoldSecond});
    font-weight: ${theme.fontWeight.semibold};
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: ${theme.fontNames.quicksand};
    src: url(${quicksandMedium}), url(${quicksandMediumSecond});
    font-weight: ${theme.fontWeight.medium};
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: ${theme.fontNames.sourceSerifPro};
    src: url(${sourceSerifProRegular}), url(${sourceSerifProRegularSecond});
    font-weight: ${theme.fontWeight.regular};
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: ${theme.fontNames.sourceSerifPro};
    src: url(${sourceSerifProSemiBold}), url(${sourceSerifProSemiBoldSecond});
    font-weight: ${theme.fontWeight.semibold};
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: ${theme.fontNames.spaceGrotesk};
    src: url(${spaceGroteskMedium}), url(${spaceGroteskMediumSecond});
    font-weight: ${theme.fontWeight.medium};
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: ${theme.fontNames.urbanist};
    src: url(${urbanistRegular}), url(${urbanistRegularSecond});
    font-weight: ${theme.fontWeight.medium};
    font-display: swap;
    font-style: normal;
  }
`;
