import { IBaseComponent } from "shared/interfaces";

export type TypographyVariants =
  | "regular"
  | "opaque"
  | "primaryTitle"
  | "title";

export interface TypographyProps extends IBaseComponent {
  children: string;
  variant?: TypographyVariants;
}
