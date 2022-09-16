import { useCallback, useEffect, useState } from "react";
import { usePosts } from "modules/posts/hooks";
import { IPost } from "modules/posts/interfaces/posts.interfaces";
import { Modal } from "shared/components/atoms";
import * as C from "./posts.page.styles";
import { ICreatePostDTO } from "modules/posts/interfaces/dtos";
import { useAlert } from "shared/contexts/alert.context";

export const PostsPage = () => {
  const { closeAlert, openAlert } = useAlert();
  const { loadPosts, createPost, updatePost, deletePost, posts, apiStatus } =
    usePosts();
  const [post, setPost] = useState<IPost>();

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const closeUpdateForm = () => setPost(undefined);

  const handleOnUpdate = async (data: ICreatePostDTO) => {
    if (post) await updatePost({ ...data, id: post.id });
    closeUpdateForm();
  };

  const handleOnDelete = useCallback(
    ({ id }: IPost) => {
      openAlert({
        message: "Are you sure you want to delete this item?",
        onCancel: closeAlert,
        onClose: closeAlert,
        onConfirm: () => {
          deletePost({ id });
          closeAlert();
        },
      });
    },
    [closeAlert, deletePost, openAlert]
  );

  return (
    <C.Container>
      <C.PostArea onSubmit={createPost} isLoading={apiStatus === "creating"} />

      <C.Posts
        posts={posts}
        isLoading={apiStatus === "pending"}
        onUpdate={(post) => setPost(post)}
        onDelete={handleOnDelete}
      />

      <Modal isOpen={!!post} onClose={closeUpdateForm}>
        <C.PostArea
          onSubmit={handleOnUpdate}
          defaultValues={post}
          isLoading={apiStatus === "updating"}
        />
      </Modal>
    </C.Container>
  );
};
