import { Control } from "react-hook-form";
import { TextAreaProps } from "shared/components/atoms";

export interface FormTextAreaProps extends TextAreaProps {
  name: string;
  control: Control<any>;
}
