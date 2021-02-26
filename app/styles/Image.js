import styled, { css } from "styled-components";

const avatarStyle = css`
  width: 128px;
  height: 128px;
  border-radius: ${({ theme: { radii } }) => radii.l2}px;
`;

const boadingStyle = css`
  width: 60%;
`;

const logoStyle = css`
  width: 150px;
  height: 150px;
`;

const Image = styled.Image`
  ${({ avatar }) => avatar && avatarStyle}
  ${({ boading }) => boading && boadingStyle}
  ${({ logo }) => logo && logoStyle}
`;

export default Image;
