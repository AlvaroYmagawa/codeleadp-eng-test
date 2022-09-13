import { PostForm } from "modules/posts/components";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3%;
`;

export const PostArea = styled(PostForm)`
  margin-bottom: 35px;
`;
