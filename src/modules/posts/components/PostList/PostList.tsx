import { IPost } from "modules/posts/interfaces/posts.interfaces";
import { memo } from "react";
import { Post, PostLoader } from "../Post";
import { PostListProps } from "./postList.interface";

const MemoPost = memo(Post);

const Loader = () => <PostLoader style={{ marginBottom: 45 }} />;

const Posts = ({ posts }: { posts: IPost[] }) => (
  <>
    {posts.map((post) => {
      const { created_datetime } = post;

      return (
        <MemoPost
          {...post}
          createdAt={created_datetime}
          style={{ marginBottom: 45 }}
        />
      );
    })}
  </>
);

export const PostList = ({
  posts = [],
  isLoading = false,
  ...rest
}: PostListProps) => {
  return (
    <div {...rest}>
      {isLoading ? (
        <>
          <Loader />
          <Loader />
          <Loader />
        </>
      ) : (
        <Posts posts={posts} />
      )}
    </div>
  );
};
