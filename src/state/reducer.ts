import { Action, GlobalState, Sausage } from "../types/types";

export const initialState: GlobalState = {
  sausageCart: [] as Sausage[],
};

const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case "ADD_SAUSAGE":
      return {
     //Add logic goes  here
      };
    case "REMOVE_SAUSAGE":
      return {
    //Remove logic goes here
        ),
      };
    case "UPDATE_SAUSAGE":
      // Update logic goes here
      return state;
    case "CLEAR_ORDER":
      return initialState;
    default:
      return state;
  }
};

export default reducer;
