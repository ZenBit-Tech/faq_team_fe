import { StyledButton } from './styles';
import { buttonProps } from './types';

export const Button = ({
  variant,
  children,
  ...props
}: React.PropsWithChildren<buttonProps>): JSX.Element => {
  return (
    <StyledButton variant={variant} {...props}>
      {' '}
      {children}{' '}
    </StyledButton>
  );
};
