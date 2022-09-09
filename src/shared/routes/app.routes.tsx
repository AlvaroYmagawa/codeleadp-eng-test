import { Routes, Route } from "react-router-dom";
import { SignInPage } from "modules/session/pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
    </Routes>
  );
};
