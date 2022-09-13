import { useForm } from "react-hook-form";
import { FormInput } from "shared/components/molecules";
import { PostFormProps } from "./postForm.interfaces";
import * as C from "./postForm.styles";

export const PostForm = ({ title, content, ...rest }: PostFormProps) => {
  const {
    control,
    formState: { isDirty, isValid },
  } = useForm({ mode: 'onChange', defaultValues: { title, content } });

  return (
    <C.Container {...rest}>
      <C.Form>
        <C.Title variant="title">What's on your mind?</C.Title>

        <FormInput name="title" control={control} placeholder="Hello world" />

        <FormInput
          name="content"
          control={control}
          placeholder="Content here"
        />

        <C.SubmitButton
          type="submit"
          content="CREATE"
          disabled={!isDirty || !isValid}
        />
      </C.Form>
    </C.Container>
  );
};
