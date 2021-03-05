import styled, { css } from "styled-components";

const avatarStyle = css`
  width: 50px;
  height: 50px;

  ${({ theme: { radii } }) => ({
    borderRadius: radii.m1,
  })}
`;

const boadingStyle = css`
  width: 60%;
`;

const cardStyle = css`
  width: 100%;
  height: 150px;

  ${({ theme: { radii, space } }) => ({
    resizeMode: "cover",
    borderRadius: radii.s2,
    marginRight: space.s1,
    marginTop: space.s1,
  })}
`;

const logoStyle = css`
  width: 150px;
  height: 150px;
`;

const Image = styled.Image`
  ${({ avatar }) => avatar && avatarStyle}
  ${({ boading }) => boading && boadingStyle}
  ${({ card }) => card && cardStyle}
  ${({ logo }) => logo && logoStyle}
`;

export default Image;
