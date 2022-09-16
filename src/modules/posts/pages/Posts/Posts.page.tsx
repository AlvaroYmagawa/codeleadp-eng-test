import { PostList } from "modules/posts/components";
import { usePosts } from "modules/posts/hooks";
import { useEffect } from "react";
import * as C from "./posts.page.styles";

export const PostsPage = () => {
  const { loadPosts, createPost, deletePost, posts, apiStatus } = usePosts();

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <C.Container>
      <C.PostArea onSubmit={createPost} />

      <PostList
        isLoading={apiStatus === "pending"}
        posts={posts}
        onDelete={({ id }) => deletePost({ id })}
      />
    </C.Container>
  );
};
