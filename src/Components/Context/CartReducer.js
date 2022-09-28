export function CartReducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, product: action.payload };

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload),
      };

    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: [
          ...state.cart.filter((c) =>
            c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
          ),
        ],
      };

    case "CATEGORY":
      return {
        ...state,
        sort: action.payload,
      };

    case "SORT_BY_PRICE":
      return { ...state, sortByPrice: action.payload };

    case "SEARCH_PROD":
      return { ...state, serachProd: action.payload };

    case "ORDER_DISPTACHED":
      return { ...state, cart: action.payload };

    default:
      return state;
  }
}
