import styled, { css } from "styled-components";

const headingStyle = css`
  ${({ big, theme: { colors, size, fonts } }) => ({
    fontSize: big ? size.xl : size.l,
    fontFamily: fonts[0],
    color: colors.darkBlue,
  })}
`;

const titleStyle = css`
  ${({ theme: { size, fonts } }) => ({
    fontSize: size.m2,
    fontFamily: fonts[1],
  })}
`;

const mediumStyle = css`
  ${({ theme: { size, fonts, colors } }) => ({
    fontSize: size.s3,
    fontFamily: fonts[4],
    color: colors.text2,
  })}
`;

const discriptionStyle = css`
  ${({ theme: { size, fonts, colors, space } }) => ({
    fontSize: size.m1,
    fontFamily: fonts[4],
    color: colors.text2,
    lineHeight: space.m2,
    marginBottom: space.s1,
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
  ${({ theme: { colors, size, fonts, space } }) => ({
    fontSize: size.s2,
    fontFamily: fonts[4],
    color: colors.danger,
    marginVertical: space.s1,
  })}
`;

const smallStyle = css`
  ${({ theme: { colors, size, fonts } }) => ({
    fontSize: size.s2,
    fontFamily: fonts[4],
    color: colors.text2,
    textTransform: "uppercase",
  })}
`;

const tinyStyle = css`
  ${({ active, theme: { size, fonts, colors } }) => ({
    fontSize: size.s1,
    fontFamily: fonts[4],
    color: active ? colors.red : colors.text2,
    textTransform: "capitalize",
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
    theme: { colors, size, fonts },
  }) => ({
    color: color ? color : white ? colors.white : colors.text,
    fontSize: size.s3,
    fontFamily: fonts[4],
    textAlign: center ? "center" : right ? "right" : "left",
    margin,
    marginTop,
    padding,
    opacity,
  })}

  ${({ button1 }) => button1 && button1Style}
  ${({ button2 }) => button2 && button2Style}
  ${({ danger }) => danger && dangerStyle}
  ${({ discription }) => discription && discriptionStyle}
  ${({ heading }) => heading && headingStyle}
  ${({ medium }) => medium && mediumStyle}
  ${({ small }) => small && smallStyle}
  ${({ title }) => title && titleStyle}
  ${({ tiny }) => tiny && tinyStyle}
`;

export default Text;
