import { useContext } from "react";

type GlobalStateProviderProp = {
  children: React.ReactNode;
};

import React from "react";

export const GlobalStateProvider = ({ children }: GlobalStateProviderProp) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
