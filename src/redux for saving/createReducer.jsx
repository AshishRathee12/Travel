import { createSlice } from '@reduxjs/toolkit'
import toast, { Toaster } from 'react-hot-toast';

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
            const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);
            if (IteamIndex == -1) {
                state.carts.push(action.payload);
                toast.success('Hotel saved.')
            } else {
                toast('Already saved!', {
                    icon: '👍',

                });
            }

        },
        // delete singel item form cart  
        deleteFromCart: (state, action) => {
            const data = state.carts.filter((item) => item.id !== action.payload.id);
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
