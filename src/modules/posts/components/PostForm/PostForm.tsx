import { useForm } from "react-hook-form";
import { TextArea } from "shared/components/atoms";
import { FormInput } from "shared/components/molecules";
import { PostFormProps } from "./postForm.interfaces";
import * as C from "./postForm.styles";

export const PostForm = ({ title, content, ...rest }: PostFormProps) => {
  const {
    control,
    formState: { isDirty, isValid },
  } = useForm({ mode: "onChange", defaultValues: { title, content } });

  return (
    <C.Container {...rest}>
      <C.Form>
        <C.Title variant="title">What's on your mind?</C.Title>

        <FormInput
          title="Title"
          name="title"
          control={control}
          placeholder="Hello world"
        />

        <C.Content title="Content" name="content" placeholder="Content here" />

        <C.SubmitButton
          type="submit"
          content="CREATE"
          disabled={!isDirty || !isValid}
        />
      </C.Form>
    </C.Container>
  );
};
