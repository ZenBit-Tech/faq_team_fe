import { HeadingInner, StyledH1 } from './styles';
import { MainHeadingProps } from './types';

export const MainHeading = ({ children }: MainHeadingProps) => {
  return (
    <HeadingInner>
      <StyledH1>{children}</StyledH1>
    </HeadingInner>
  );
};