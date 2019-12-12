import { useDispatch } from "react-redux";

export default function useAction(action) {
  const dispatch = useDispatch();

  if (typeof action === "function") {
    return (...args) => dispatch(action(...args));
  } else {
    return () => dispatch(action);
  }
}
