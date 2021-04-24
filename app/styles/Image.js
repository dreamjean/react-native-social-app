import styled, { css } from "styled-components";

const avatarStyle = css`
  width: 50px;
  height: 50px;

  ${({ theme: { radii } }) => ({
    resizeMode: "cover",
    borderRadius: radii.m1,
  })}
`;

const boardingStyle = css`
  width: 60%;
`;

const cardStyle = css`
  width: 100%;
  height: 150px;

  ${({ theme: { radii, space } }) => ({
    resizeMode: "cover",
    borderRadius: radii.s2,
    marginRight: space.s1,
    marginTop: space.s2,
  })}
`;

const logoStyle = css`
  width: 150px;
  height: 150px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;

  ${({ avatar }) => avatar && avatarStyle}
  ${({ boarding }) => boarding && boardingStyle}
  ${({ card }) => card && cardStyle}
  ${({ logo }) => logo && logoStyle}
`;

export default Image;
