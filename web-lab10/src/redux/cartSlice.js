import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }


            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        removeItemFromCart: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);


            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        adjustQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find((i) => i.id === id);
            if (item) {
                item.quantity = quantity;
            }

            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
    },
});

export const { addItemToCart, removeItemFromCart, adjustQuantity } = cartSlice.actions;
export default cartSlice.reducer;
