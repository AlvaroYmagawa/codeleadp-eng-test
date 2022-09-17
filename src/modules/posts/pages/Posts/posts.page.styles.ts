import { PostForm, PostList } from "modules/posts/components";
import { Button } from "shared/components/atoms";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: calc(80px + 3%) 3% 3% 3%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 27px;
  background-color: ${({ theme: { colors } }) => colors.primary};
`;

export const Posts = styled(PostList)`
  margin-top: 35px;
`;

export const PostArea = styled(PostForm)`
  max-width: 800px;
  margin: 0 auto;
`;

export const LogoutButton = styled(Button)``;
