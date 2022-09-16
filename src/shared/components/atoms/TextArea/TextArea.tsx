import { TextAreaProps } from "./textArea.interfaces";
import * as C from "./textArea.styles";

export const TextArea = ({
  name,
  title,
  value,
  placeholder,
  onChange = () => {},
  ...rest
}: TextAreaProps) => {
  return (
    <C.Container {...rest}>
      {title && <C.Title>{title}</C.Title>}

      <C.TextArea
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </C.Container>
  );
};
