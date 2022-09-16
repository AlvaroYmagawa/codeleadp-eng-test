import { Input } from "shared/components/atoms";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./formInput.interfaces";

export const FormInput = ({ control, name, ...rest }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, name } }) => (
        <Input name={name} onChange={onChange} value={value} {...rest} />
      )}
    />
  );
};