import { memo } from "react";
import { IPost } from "modules/posts/interfaces/posts.interfaces";
import { Post, PostLoader } from "../Post";
import { PostListProps } from "./postList.interface";
import { formatDistanceToNow } from "date-fns";

const MemoPost = memo(Post);

const Loader = () => <PostLoader style={{ marginBottom: 45 }} />;

const Posts = ({ posts }: { posts: IPost[] }) => (
  <>
    {posts.map((post) => {
      const { created_datetime } = post;

      return (
        <MemoPost
          key={post.id}
          {...post}
          createdAt={formatDistanceToNow(new Date(created_datetime))}
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
