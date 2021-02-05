import styled, { css } from "styled-components";

const headingStyle = css`
  ${({ theme: size, getFont }) => ({
    fontSize: size.xl,
    fontFamily: getFont(0),
  })}
`;

const titleStyle = css`
  ${({ theme: size, getFont }) => ({
    fontSize: size.l,
    fontFamily: getFont(1),
  })}
`;

const mediumStyle = css`
  ${({ theme: size, getFont }) => ({
    fontSize: size.m,
    fontFamily: getFont(2),
  })}
`;

const smallStyle = css`
  ${({ theme: size, getFont }) => ({
    fontSize: size.s1,
    fontFamily: getFont(2),
  })}
`;

const tinyStyle = css`
  ${({ theme: size, getFont }) => ({
    fontSize: size.s2,
    fontFamily: getFont(2),
  })}
`;

const Text = styled.Text`
  ${({
    margin,
    padding,
    center,
    right,
    color,
    theme: { colors, size, getFont },
  }) => ({
    color: color ? color : colors.text,
    fontSize: size.s3,
    fontFamily: getFont(2),
    textAlign: center ? "center" : right ? "right" : "left",
    margin,
    padding,
  })}

  ${({ heading }) => heading && headingStyle}
  ${({ title }) => title && titleStyle}
  ${({ medium }) => medium && mediumStyle}
  ${({ small }) => small && smallStyle}
  ${({ tiny }) => tiny && tinyStyle}
`;

export default Text;
