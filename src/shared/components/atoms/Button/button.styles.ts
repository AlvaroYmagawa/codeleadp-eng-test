import { IColors } from "shared/interfaces";
import styled from "styled-components";
import { ButtonVariants } from "./button.interfaces";

const getVariantStyles = (
  colors: IColors,
  variant: ButtonVariants,
  disabled: boolean
) => {
  const { primary, primaryText, element } = colors;

  if (disabled)
    return {
      backgroundColor: "gray",
      color: primaryText,
      fontSize: 16,
      border: `1px solid gray`,
      pointsEvent: "none",
    };

  switch (variant) {
    case "outlined":
      return {
        border: `1px solid ${primary}`,
        backgroundColor: element,
      };

    default:
      return {
        backgroundColor: primary,
        color: primaryText,
        fontSize: 16,
        border: `1px solid ${primary}`,
      };
  }
};

export const Button = styled.button<{
  variant: ButtonVariants;
  disabled: boolean;
}>`
  ${({ theme: { colors }, variant, disabled }) =>
    getVariantStyles(colors, variant, disabled)}

  border-radius: 0;
  padding: 7px 30px;
  transition: all 0.6s ease;
  font-weight: 700;
  font-size: 16px;

  &:hover {
    opacity: 0.4;
  }
`;
