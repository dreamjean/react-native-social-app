import styled, { css } from "styled-components/native";

const headingStyle = css`
  ${({ big, blue, theme: { colors, size, fonts } }) => ({
    fontSize: big ? size.xl : size.l,
    fontFamily: fonts[0],
    color: blue ? colors.blue : colors.darkBlue,
  })}
`;

const titleStyle = css`
  ${({ theme: { colors, size, fonts } }) => ({
    fontSize: size.m1,
    fontFamily: fonts[1],
    color: colors.text,
    opacity: 0.8,
  })}
`;

const title2Style = css`
  ${({ theme: { colors, size, fonts } }) => ({
    fontSize: size.m2,
    fontFamily: fonts[1],
    color: colors.text,
  })}
`;

const title3Style = css`
  ${({ theme: { colors, size, fonts } }) => ({
    fontSize: size.l,
    fontFamily: fonts[1],
    color: colors.text,
    opacity: 0.75,
  })}
`;

const mediumStyle = css`
  ${({ theme: { size, fonts, colors } }) => ({
    fontSize: size.s3,
    fontFamily: fonts[4],
    color: colors.text2,
  })}
`;

const descriptionStyle = css`
  line-height: 20px;

  ${({ theme: { size, fonts, colors, space } }) => ({
    fontSize: size.m1,
    fontFamily: fonts[4],
    color: colors.text2,
    marginBottom: space.s1,
  })}
`;

const statNumStyle = css`
  ${({ theme: { size, fonts, colors } }) => ({
    fontSize: size.m2,
    fontFamily: fonts[1],
    color: colors.grey2,
    opacity: 0.9,
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
  ${({ upper, theme: { colors, size, fonts } }) => ({
    fontSize: size.s2,
    fontFamily: fonts[4],
    color: colors.text2,
    textTransform: upper ? "uppercase" : "none",
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
  ${({ description }) => description && descriptionStyle}
  ${({ heading }) => heading && headingStyle}
  ${({ medium }) => medium && mediumStyle}
  ${({ small }) => small && smallStyle}
  ${({ statNum }) => statNum && statNumStyle}
  ${({ title }) => title && titleStyle}
  ${({ title2 }) => title2 && title2Style}
  ${({ title3 }) => title3 && title3Style}
  ${({ tiny }) => tiny && tinyStyle}
`;

export default Text;
