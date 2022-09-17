import { PostForm, PostList } from "modules/posts/components";
import { Button } from "shared/components/atoms";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3%;
`;

export const Posts = styled(PostList)`
  margin-top: 35px;
`;

export const PostArea = styled(PostForm)`
  max-width: 800px;
  margin: 0 auto;
`;

export const LogoutButton = styled(Button)`
  margin-bottom: 24px;
`;
