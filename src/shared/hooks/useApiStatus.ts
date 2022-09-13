import { useCallback, useState } from "react";

export type ApiStatus =
  | "idle"
  | "pending"
  | "success"
  | "error"
  | "creating"
  | "deleting"
  | "updating";

export const useApiStatus = () => {
  const [apiStatus, setApiStatus] = useState<ApiStatus>("idle");

  const changeApiStatus = useCallback(
    (status: ApiStatus) => setApiStatus(status),
    []
  );

  return { apiStatus, changeApiStatus };
};
