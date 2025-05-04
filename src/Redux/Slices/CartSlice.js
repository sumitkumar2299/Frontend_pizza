import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import toast from 'react-hot-toast'

const initialState = {
    cartsData:""
}

export const addProductToCart = createAsyncThunk('/cart/addProduct',async(productId)=>{
    try{
        const response = axiosInstance.post(`/carts/add/${productId}`);
        toast.promise(response,{
            loading:'Adding product to cart',
            error:'something went wrong cannot add product to cart',
            success:'product added successfully',
        });
        const apiResponse = await response;
        return apiResponse;
    }catch(error){
        console.log(error);
        toast.error('something went wrong');
    }
});

export const removeProductFromCart = createAsyncThunk('/cart/removeProduct',async(productId)=>{
    try{
        const response = axiosInstance.post(`carts/remove/${productId}`);
        toast.promise(response,{
            loading:'Removing product from cart',
            error:'something went wrong cannot remove product from the cart',
            success:'product removed succesfully',
        })
        const apiResponse = await response;
        return apiResponse;
    }catch(error){
        console.log(error);
        toast.error('something went wrong');
    }
});

export const getCartDetails = createAsyncThunk('/cart/geDetails',async()=>{
    try{
        const response = axiosInstance.get(`/carts`);
        toast.promise(response,{
            loading:'fetching cart details',
            error:'something went wrong cannot fetch cart',
            success:'cart fetched successfully',
        })
        const apiResponse = await response;
        return apiResponse;
    }catch(error){
        console.log(error);
        toast.error('something went wrong');
    }
});


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCartDetails.fulfilled,(state,action)=>{
            state.cartsData = action?.payload?.data?.data;
        })
    }
})

export default cartSlice.reducer;