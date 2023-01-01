export const initialState = {
  cart: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.cart.findIndex((cur) => cur["id"] === action.item.id) !== -1) {
        return {
          ...state,
          cart: state.cart.map((cur) =>
            cur["id"] === action.item.id
              ? { ...cur, quantity: cur["quantity"] + 1 }
              : cur
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.item, quantity: 1 }],
        };
      }
    default:
      return state;
  }
};

export default reducer;
