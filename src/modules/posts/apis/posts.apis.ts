import { api } from "shared/services/api";

export const listPosts = () => api.get("/careers/");
