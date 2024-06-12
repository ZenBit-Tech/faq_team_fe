import styled from '@emotion/styled';
import { Theme } from 'styles/theme';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 150px;
  padding: 20px;
`;

export const StyledTitle = styled.div<{ theme?: Theme }>`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: bold;
  margin: 0;
`;

export const StyledSubtitle = styled.div<{ theme?: Theme }>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: #666;
  margin: 0;
`;

export const StyledRadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  align-items: center;
`;

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledInput = styled.input<{ theme?: Theme }>`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid grey;
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
