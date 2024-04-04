import React, { createContext, useReducer } from "react";
import reducer, { initialState } from "../state/reducer";
import { GlobalStateContext } from "./GlobalStateContext";

type GlobalStateProviderProps = {
  children: React.ReactNode;
};

const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
