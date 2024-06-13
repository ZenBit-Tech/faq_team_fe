import styled from '@emotion/styled';
import { Theme } from 'styles/theme';

export const StyledRadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  align-items: center;
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
`;
