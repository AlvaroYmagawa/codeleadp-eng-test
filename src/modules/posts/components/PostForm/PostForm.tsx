import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "shared/components/atoms";

import { useAppSelector } from "shared/hooks";
import { PostFormData, PostFormProps } from "./postForm.interfaces";
import * as C from "./postForm.styles";

export const PostForm = ({
  defaultValues,
  onSubmit = () => {},
  isLoading = false,
  ...rest
}: PostFormProps) => {
  const { username } = useAppSelector((state) => state.session);
  const [title, setTitle] = useState(defaultValues?.title || "");
  const [content, setContent] = useState(defaultValues?.content || "");
  const { handleSubmit } = useForm<PostFormData>();

  const clearForm = () => {
    setTitle("");
    setContent("");
  };

  return (
    <C.Container {...rest}>
      <C.Form
        onSubmit={handleSubmit(() => {
          onSubmit({ content, title, username });
          clearForm();
        })}
      >
        <C.Title variant="title">What's on your mind?</C.Title>

        <Input
          value={title}
          onChange={setTitle}
          title="Title"
          name="title"
          placeholder="Hello world"
        />

        <C.Content
          value={content}
          onChange={setContent}
          title="Content"
          name="content"
          placeholder="Content here"
        />

        <C.SubmitButton
          type="submit"
          content={defaultValues ? "SAVE" : "CREATE"}
          disabled={title === "" || content === ""}
          isLoading={isLoading}
        />
      </C.Form>
    </C.Container>
  );
};
