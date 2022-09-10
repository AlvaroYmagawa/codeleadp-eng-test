import { Control } from 'react-hook-form';
import { InputProps } from "shared/components/atoms";

export interface FormInputProps extends InputProps {
  name: string;
  control: Control<any>;
}