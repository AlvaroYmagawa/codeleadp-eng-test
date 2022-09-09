import { IColors } from "shared/interfaces";
import styled from "styled-components";
import { TypographyVariants } from "./typography.interfaces";

const getVariantStyles = (colors: IColors, variant: TypographyVariants) => {
  const { strongText, primaryText, opaqueText } = colors;

  switch (variant) {
    case "opaque":
      return { color: opaqueText, fontSize: 18 };

    case "primaryTitle":
      return { color: primaryText, fontSize: 22, fontWeight: 700 };

    default:
      return { color: strongText, fontSize: 18 };
  }
};

export const Typography = styled.p<{ variant: TypographyVariants }>`
  ${({ variant, theme: { colors } }) => getVariantStyles(colors, variant)}
`;
