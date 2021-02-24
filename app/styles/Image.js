import styled, { css } from "styled-components";

const avatarStyle = css`
  width: 128px;
  height: 128px;
  border-radius: ${({ theme: { radii } }) => radii.l2}px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;

  ${({ avatar }) => avatar && avatarStyle}
`;

export default Image;
