export type SausageProperty = { name: string; cost: number };

export type Sausage = {
  MenuOption: SausageProperty;
  size: SausageProperty;
  extraToppings: SausageProperty[];
};

export type Action =
  | { type: "ADD_SAUSAGE"; payload: Sausage }
  | { type: "REMOVE_SAUSAGE"; payload: Sausage }
  | { type: "UPDATE_SAUSAGE"; payload: Sausage }
  | { type: "CLEAR_ORDER" };

export type GlobalState = {
  sausageCart: Sausage[];
};
