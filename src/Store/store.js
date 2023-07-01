import { createStore } from "redux";

const initialState = {
    count: 0,
    cartItems: [],
    query: ''
};

const { count, cartItems } = initialState;

// console.log(cartItems);

const reducerFn = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
        const updatedCartItems = [action.payload.itemId, ...state.cartItems]
        console.log(updatedCartItems)
        return {
            ...state,
            cartItems: updatedCartItems,
            count: state.count + 1

      };
      case 'SEARCH_QUERY': {
        return {
          query: state.query = action.payload.query

        }
      }
    default:
      return state;
  }
};

export const store = createStore(reducerFn);