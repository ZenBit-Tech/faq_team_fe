import styled from '@emotion/styled';

//import { Section } from 'components/section';
import { Theme } from 'styles/theme';

export const HomeSection = styled.section<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.colors.white};

  .flex-container {
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
    padding: 15px;
  }

  .right {
    flex-grow: 1;
  }

  .products {
    margin-bottom: 22px;
  }

  .sorting {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .sort-btn {
      align-self: flex-end;
    }
  }
`;
