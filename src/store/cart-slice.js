import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, changed: false },
  reducers: {
    // TO DISPLAY THE DATA FETCHED FROM THE SERVER ON THE PAGE LOAD
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    // ADDING ITEM(S) TO CART
    addToCart(state, action) {
      const selectedItem = action.payload;
      const existngItem = state.items.find(
        (item) => item.id === selectedItem.id
      );

      // INCREASE THE TOTAL QUANTITY BY 1 EVERY TIME A NEW ITEM IS ADDED TO THE CART
      state.totalQuantity++;

      // IF THERE'S NO SUCH ITEM IN THE CART, THEN PLACE IT THERE AS AN ENTIRE OBJECT
      if (!existngItem) {
        state.items.push({
          title: selectedItem.title,
          id: selectedItem.id,
          price: selectedItem.price,
          quantity: 1,
          totalPrice: selectedItem.price,
        });
      } else {
        // IF THE ITEM IS ALREADY IN THE CART, UPDATE ONLY ITS QUANTITY
        existngItem.quantity++;
        existngItem.totalPrice = existngItem.totalPrice + selectedItem.price;
      }

      // TO SEND THE CART DATA TO THE SERVER ONLY WHEN A NEW ITEM IS ADDED TO THE CART
      // AND NOT ON THE PAGE LOAD
      state.changed = true;
    },

    // REMOVING AN ITEM FROM CART
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existngItem = state.items.find((item) => item.id === id);

      // UPDATING THE TOTAL QUANTITY
      state.totalQuantity--;

      // IF THE QUANTITY OF THE ITEM IN THE CART = 1,
      // THEN REMOVE IT FROM THE ARRAY OF ITEMS COMPLETELY
      if (existngItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        // OTHERWISE, JUST SUBSTRACT 1 FROM ITS QUANTITY
        existngItem.quantity--;
        // AND UPDATE THE TOTAL PRICE OF THIS ITEM
        existngItem.totalPrice = existngItem.totalPrice - existngItem.price;
      }

      // TO SEND THE CART DATA TO THE SERVER ONLY WHEN A NEW ITEM IS REMOVED FROM THE CART
      // AND NOT ON THE PAGE LOAD
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
