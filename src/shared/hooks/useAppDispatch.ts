import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/app.store";

export const useAppDispatch: () => AppDispatch = useDispatch;
