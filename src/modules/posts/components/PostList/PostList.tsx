import { memo } from "react";
import { Post } from "../Post";
import { PostListProps } from "./postList.interface";

const MemoPost = memo(Post);

export const PostList = ({ posts = [], ...rest }: PostListProps) => {
  return (
    <div {...rest}>
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
    </div>
  );
};
