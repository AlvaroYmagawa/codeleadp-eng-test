import { useForm } from "react-hook-form";
import { FormInput } from "shared/components/molecules";
import { PostFormProps } from "./postForm.interfaces";
import * as C from "./postForm.styles";

export const PostForm = ({ title, content, ...rest }: PostFormProps) => {
  const {
    control,
    formState: { isDirty, isValid },
  } = useForm({ defaultValues: { title, content } });

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
          content="CREATE"
          type="submit"
          disabled={!isDirty || !isValid}
        />
      </C.Form>
    </C.Container>
  );
};
