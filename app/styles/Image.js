import styled, { css } from "styled-components";

const avatarStyle = css`
  width: 50px;
  height: 50px;

  ${({ theme: { radii } }) => ({
    borderRadius: radii.m1,
  })}
`;

const avatar2Style = css`
  width: 120px;
  height: 120px;

  ${({ theme: { radii } }) => ({
    borderRadius: radii.l,
  })}
`;

const cardStyle = css`
  width: 100%;
  height: 150px;

  ${({ theme: { radii, space } }) => ({
    resizeMode: "center",
    borderRadius: radii.s2,
    marginRight: space.s1,
    marginTop: space.s2,
  })}
`;

const card2Style = css`
  width: 100%;
  height: 240px;

  ${({ theme: { radii, space } }) => ({
    resizeMode: "center",
    borderRadius: radii.s2,
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
  ${({ avatar2 }) => avatar2 && avatar2Style}
  ${({ card }) => card && cardStyle}
  ${({ card2 }) => card2 && card2Style}
  ${({ logo }) => logo && logoStyle}
`;

export default Image;
