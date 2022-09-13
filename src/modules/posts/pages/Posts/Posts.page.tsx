import { listPosts } from "modules/posts/apis/posts.apis";
import { PostForm, PostList } from "modules/posts/components";
import { useEffect } from "react";
import * as C from "./posts.page.styles";

export const PostsPage = () => {
  useEffect(() => {
    listPosts();
  }, []);

  return (
    <C.Container>
      <PostForm />

      <PostList
        posts={[
          {
            id: 1,
            username: "@kenzoYmagawa",
            content: "asuhau husa uh asuh sauhas uh",
            title: "My first post on CodeLeap",
            created_datetime: "25 minutes ago",
          },
          {
            id: 2,
            username: "@kenzoYmagawa",
            content: "asuhau husa uh asuh sauhas uh",
            title: "My first post on CodeLeap",
            created_datetime: "25 minutes ago",
          },
          {
            id: 3,
            username: "@kenzoYmagawa",
            content: "asuhau husa uh asuh sauhas uh",
            title: "My first post on CodeLeap",
            created_datetime: "25 minutes ago",
          },
        ]}
      />
    </C.Container>
  );
};
