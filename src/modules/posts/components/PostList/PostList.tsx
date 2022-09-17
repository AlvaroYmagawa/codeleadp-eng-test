import { memo } from "react";
import { Post, PostLoader } from "../Post";
import { PostListProps } from "./postList.interface";
import { formatDistanceToNow } from "date-fns";

const MemoPost = memo(Post);

const Loader = () => <PostLoader style={{ marginBottom: 45 }} />;

const Posts = ({
  posts,
  username,
  onDelete = () => {},
  onUpdate = () => {},
}: PostListProps) => (
  <div>
    {posts.map((post) => {
      const { created_datetime, username: postUsername } = post;

      const isMyPost = postUsername === username;

      return (
        <MemoPost
          key={post.id}
          {...post}
          onDelete={isMyPost ? () => onDelete(post) : undefined}
          onUpdate={isMyPost ? () => onUpdate(post) : undefined}
          createdAt={formatDistanceToNow(new Date(created_datetime))}
          style={{ marginBottom: 45 }}
        />
      );
    })}
  </div>
);

export const PostList = ({
  style,
  className,
  isLoading = false,
  ...rest
}: PostListProps) => {
  return (
    <div style={style} className={className}>
      {isLoading ? (
        <>
          <Loader />
          <Loader />
          <Loader />
        </>
      ) : (
        <Posts {...rest} />
      )}
    </div>
  );
};
