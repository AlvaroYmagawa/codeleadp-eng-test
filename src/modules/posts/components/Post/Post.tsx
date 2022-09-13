import { PostProps } from "./post.interfaces";
import * as C from "./post.styles";

export const Post = ({
  title,
  content,
  createdAt,
  username,
  ...rest
}: PostProps) => {
  return (
    <C.Container {...rest}>
      <C.Header>
        <C.Title variant="title">{title}</C.Title>

        <C.Icons>
          <C.DeleteIcon name="delete" size={24} />
          <C.EditIcon name="edit"size={24} />
        </C.Icons>
      </C.Header>

      <C.ContentConainer>
        <C.Infos>
          <C.Username variant="opaque">{username}</C.Username>

          <C.CreatedAt variant="opaque">{createdAt}</C.CreatedAt>
        </C.Infos>

        <C.Content>{content}</C.Content>
      </C.ContentConainer>
    </C.Container>
  );
};
