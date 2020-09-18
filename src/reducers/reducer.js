export const initialState = {
  orders: [],
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((prev, current) => current.price + prev, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter(
          (basketItem) => basketItem.basketId !== action.basketId
        ),
      };

    case "ADD_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.order],
        basket: [],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
