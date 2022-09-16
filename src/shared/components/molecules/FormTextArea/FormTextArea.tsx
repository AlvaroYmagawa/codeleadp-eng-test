import { TextArea } from "shared/components/atoms";
import { Controller } from "react-hook-form";
import { FormTextAreaProps } from "./formTextArea.interfaces";

export const FormTextArea = ({ control, name, ...rest }: FormTextAreaProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, name } }) => (
        <TextArea name={name} onChange={onChange} value={value} {...rest} />
      )}
    />
  );
};
