import styled, { css } from "styled-components";

const headingStyle = css`
  ${({ theme: { size, getFont } }) => ({
    fontSize: size.xl,
    fontFamily: getFont(1),
  })}
`;

const titleStyle = css`
  ${({ theme: { size, getFont } }) => ({
    fontSize: size.l,
    fontFamily: getFont(1),
  })}
`;

const mediumStyle = css`
  ${({ theme: { size, getFont } }) => ({
    fontSize: size.m,
    fontFamily: getFont(2),
  })}
`;

const button1Style = css`
  ${({ theme: { colors, size, getFont } }) => ({
    fontSize: size.m1,
    fontFamily: getFont(2),
    color: colors.white,
    textTransform: "capitalize",
  })}
`;

const button2Style = css`
  ${({ theme: { colors, size, getFont } }) => ({
    fontSize: size.s3,
    fontFamily: getFont(2),
    color: colors.text,
    textTransform: "capitalize",
  })}
`;

const errorStyle = css`
  ${({ theme: { colors, size, getFont, space } }) => ({
    fontSize: size.s2,
    fontFamily: getFont(2),
    color: colors.danger,
    marginVertical: space.s1,
  })}
`;

const smallStyle = css`
  ${({ theme: { colors, size, getFont } }) => ({
    fontSize: size.s2,
    fontFamily: getFont(2),
    color: colors.text2,
    textTransform: "uppercase",
  })}
`;

const tinyStyle = css`
  ${({ theme: { size, getFont } }) => ({
    fontSize: size.s1,
    fontFamily: getFont(2),
  })}
`;

const Text = styled.Text`
  ${({
    center,
    color,
    marginTop,
    margin,
    opacity,
    padding,
    right,
    theme: { colors, size, getFont },
  }) => ({
    color: color ? color : colors.text,
    fontSize: size.s3,
    fontFamily: getFont(2),
    textAlign: center ? "center" : right ? "right" : "left",
    margin,
    marginTop,
    padding,
    opacity,
  })}

  ${({ button1 }) => button1 && button1Style}
  ${({ button2 }) => button2 && button2Style}
  ${({ error }) => error && errorStyle}
  ${({ heading }) => heading && headingStyle}
  ${({ medium }) => medium && mediumStyle}
  ${({ small }) => small && smallStyle}
  ${({ title }) => title && titleStyle}
  ${({ tiny }) => tiny && tinyStyle}
`;

export default Text;
