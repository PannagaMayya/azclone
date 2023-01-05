export const initialState = {
  cart: [],
  user: null,
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
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((i) => i.id !== action.id) };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((cur) =>
          cur["id"] === action.id
            ? { ...cur, quantity: parseInt(action.quantity) }
            : cur
        ),
      };
    case "SET_USER":
      return { ...state, user: action.user };
    case "SIGN_OUT":
      return { ...action.stateclear };
    default:
      return state;
  }
};

export default reducer;
