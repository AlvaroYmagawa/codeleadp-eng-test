import { memo } from "react";
import { Post, PostLoader } from "../Post";
import { PostListProps } from "./postList.interface";
import { formatDistanceToNow } from "date-fns";

const MemoPost = memo(Post);

const Loader = () => <PostLoader style={{ marginBottom: 45 }} />;

const Posts = ({
  posts,
  onDelete = () => {},
  onUpdate = () => {},
}: PostListProps) => (
  <div>
    {posts.map((post) => {
      const { created_datetime } = post;

      return (
        <MemoPost
          key={post.id}
          {...post}
          onDelete={() => onDelete(post)}
          onUpdate={() => onUpdate(post)}
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
