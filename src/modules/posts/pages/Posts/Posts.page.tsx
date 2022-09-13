import { PostList } from "modules/posts/components";
import { usePosts } from "modules/posts/hooks";
import { useEffect } from "react";
import * as C from "./posts.page.styles";

export const PostsPage = () => {
  const { loadPosts, posts, apiStatus } = usePosts();

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <C.Container>
      <C.PostArea />

      <PostList isLoading={apiStatus === "pending"} posts={posts} />
    </C.Container>
  );
};
