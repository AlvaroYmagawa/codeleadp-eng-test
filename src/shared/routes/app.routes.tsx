import { Routes, Route } from "react-router-dom";
import { SignInPage } from "modules/session/pages";
import { useAppSelector } from "shared/hooks";
import { PostsPage } from "modules/posts/pages";

const UnsignedRoutes = () => (
  <Routes>
    <Route path="/" element={<SignInPage />} />
  </Routes>
);

const SignedRoutes = () => (
  <Routes>
    <Route path="/" element={<PostsPage />} />
  </Routes>
);

export const AppRoutes = () => {
  const { username } = useAppSelector((state) => state.session);

  return username ? <SignedRoutes /> : <UnsignedRoutes />;
};
