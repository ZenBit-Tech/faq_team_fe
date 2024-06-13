import styled from '@emotion/styled';
import { Theme } from 'styles/theme';

export const StyledRadioGroup = styled.div<{ theme?: Theme }>`
  display: flex;
  gap: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    width: 100%;
    margin: 20px;
    gap: 10px;
    flex-direction: column;

    div {
      background-color: ${({ theme }) => theme.colors.pastel_green};
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 5px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
    margin: 50px;
    gap: 30px;
    flex-direction: column;
  }
`;

export const StyledInput = styled.input<{ theme?: Theme }>`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  cursor: pointer;
  outline: none;
  margin-right: 10px;

  :checked::before {
    content: '';
    width: 12px;
    height: 12px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
