import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.findIndex(item => item.name === newItem.name)
            if (existingItemIndex !== -1) {
                state[existingItemIndex].quantity += 1
            }
            else {
                state.push({ ...newItem, quantity: 1 })
            }
        },
        desQuantity: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.findIndex(item => item.name === newItem.name);
            if (existingItemIndex !== -1 && state[existingItemIndex].quantity > 0) {
                state[existingItemIndex].quantity -= 1;
            }

        }
    }
});
export const { addItem, desQuantity } = cartSlice.actions;
export default cartSlice.reducer;