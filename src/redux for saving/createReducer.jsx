import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    carts: []
}

// cart slice 

const saveSlice = createSlice({
    name: "save",
    initialState,
    reducers: {

        //add to cart
        addToCart: (state, action) => {
            const IteamIndex = state.carts.findIndex((iteam) => iteam.idMeal === action.payload.idMeal);
            if (IteamIndex == -1) {
                state.carts.push(action.payload)
            }

        },
        // delete singel item form cart  
        deleteFromCart: (state, action) => {
            const data = state.carts.filter((item) => item.idMeal !== action.payload.idMeal);
            console.log(data);
            state.carts = data;
        },

        // clear the cart data 
        clearall: (state, action) => {
            state.carts = []
        }
    }
});

export const { addToCart, deleteFromCart, clearall } = saveSlice.actions;

export default saveSlice.reducer;
