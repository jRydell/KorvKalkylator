export type SausageProperty = { name: string; cost: number };

export type Sausage = {
  pizzaMenuOption: SausageProperty;
  size: SausageProperty;
  extraToppings: SausageProperty[];
};

export type Action =
  | { type: "ADD_SAUSAGE"; payload: Sausage }
  | { type: "REMOVE_SAUSAGE"; payload: Sausage }
  | { type: "UPDATE_SAUSAGE"; payload: Sausage }
  | { type: "CLEAR_ORDER" };

export type GlobalState = {
  pizzaOrder: Sausage[];
};

const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case "ADD_SAUSAGE":

    case "REMOVE_SAUSAGE":

    case "UPDATE_SAUSAGE":
      return state;
    case "CLEAR_ORDER":
      return initialState;
    default:
      return state;
  }
};

export default reducer;
