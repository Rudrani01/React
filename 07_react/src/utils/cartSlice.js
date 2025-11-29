import { createSlice } from "@reduxjs/toolkit";

// cartSlice -- big object
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    // multiple small reducers functions for slice --- reducers 
    reducers: {
        addItem: (state, action) => {
            // mutating the state over here
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        // originalState = {items: ["pizza"]}
        clearCart: (state, action) => {
        // RTK - either mutate the existing state or return a new state
        // state.items.length = 0; // originalState = []

            return { items: [] }; // this new object will be replaced inside originalState = { items: [] }

            // state.items.length = 0; // state = [ ]
        },
    },
});




export const {addItem, removeItem, clearCart} = cartSlice.actions;

// exporting just 1 reducer from it -- reducer
export default cartSlice.reducer;