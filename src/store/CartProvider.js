import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateItems = state.items.concat(action.item);
    const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount
    return{
        item: updateItems,
        totalAmount:updateTotalAmount
    }
  }
  if (action.type === "REMOVE") {
  }
  return defaultCartState;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHndler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemToCartHndler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHndler,
    removeItem: removeItemToCartHndler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
