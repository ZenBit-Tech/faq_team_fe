import styled from '@emotion/styled';

export const EditImgBtn = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ImgWrap = styled.div`
  width: 120px;
  height: 120px;
  position: relative;

  img {
    border-radius: 50%;
  }
`;
