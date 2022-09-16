import { useForm } from "react-hook-form";
import { FormInput } from "shared/components/molecules";
import { useAppSelector } from "shared/hooks";
import { PostFormData, PostFormProps } from "./postForm.interfaces";
import * as C from "./postForm.styles";

export const PostForm = ({
  title,
  content,
  onSubmit = () => {},
  ...rest
}: PostFormProps) => {
  const { username } = useAppSelector((state) => state.session);
  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<PostFormData>({
    mode: "onChange",
    defaultValues: { title, content },
  });

  return (
    <C.Container {...rest}>
      <C.Form
        onSubmit={handleSubmit(({ content, title }) =>
          onSubmit({ content, title, username })
        )}
      >
        <C.Title variant="title">What's on your mind?</C.Title>

        <FormInput
          title="Title"
          name="title"
          control={control}
          placeholder="Hello world"
        />

        <C.Content
          control={control}
          title="Content"
          name="content"
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
