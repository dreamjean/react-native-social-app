import styled, { css } from "styled-components";

const headingStyle = css`
  ${({ big, theme: { colors, size, fonts } }) => ({
    fontSize: big ? size.xl : size.l,
    fontFamily: fonts[0],
    color: colors.darkBlue,
  })}
`;

const titleStyle = css`
  ${({ theme: { size, getFont } }) => ({
    fontSize: size.l,
    fontFamily: getFont(1),
  })}
`;

const inputTitleStyle = css`
  ${({ error, touched, theme: { colors, getFont, size } }) => ({
    fontFamily: getFont(2),
    fontSize: size.s2,
    color: !touched ? colors.text2 : error ? colors.danger : colors.blue,
    textTransform: "uppercase",
  })}
`;

const mediumStyle = css`
  ${({ theme: { size, getFont } }) => ({
    fontSize: size.m,
    fontFamily: getFont(2),
  })}
`;

const button1Style = css`
  ${({ color, theme: { colors, fonts, size } }) => ({
    fontSize: size.m2,
    fontFamily: fonts[1],
    color: color ? color : colors.white,
    textTransform: "capitalize",
  })}
`;

const button2Style = css`
  ${({ theme: { colors, size, fonts } }) => ({
    fontSize: size.s3,
    fontFamily: fonts[1],
    color: colors.blue2,
  })}
`;

const dangerStyle = css`
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
    white,
    theme: { colors, size, getFont },
  }) => ({
    color: color ? color : white ? colors.white : colors.text,
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
  ${({ danger }) => danger && dangerStyle}
  ${({ heading }) => heading && headingStyle}
  ${({ inputTitle }) => inputTitle && inputTitleStyle}
  ${({ medium }) => medium && mediumStyle}
  ${({ small }) => small && smallStyle}
  ${({ title }) => title && titleStyle}
  ${({ tiny }) => tiny && tinyStyle}
`;

export default Text;
