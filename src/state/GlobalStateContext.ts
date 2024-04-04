import { createContext } from "react";
import { Action, GlobalState, Sausage } from "../types/types";

export const initialState = { sausageCart: [] as Sausage[] };

export const GlobalStateContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});
