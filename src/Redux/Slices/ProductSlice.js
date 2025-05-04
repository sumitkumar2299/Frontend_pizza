import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axiosInstance from '../../Helpers/axiosInstance'
import toast from 'react-hot-toast'

const initialState = {
    productsData: [], // array of products
}

export const getAllProducts = createAsyncThunk('/products/getAll',async()=>{
    try{
        const products = axiosInstance.get('/products');
        toast.promise(products,{
            loading:"Loading all the products",
            error:"Something went wrong cannot load products",
            success:'products loaded succesfully',
        });
        const apiResponse = await products;
        return apiResponse
    }
    catch(error){
        console.log(error);
        toast.error("something went wrong");
    }

})

export const getproductDetails = createAsyncThunk('/products/getDetails',async(id)=>{
    try{
        const product = axiosInstance.get(`/products/${id}`);
        toast.promise(product,{
            loading:'loading the product',
            error:'something went wrong cannot load product',
            success:'product loaded successfully',
        });
        const apiResponse = await product;
        return apiResponse;
    }catch(error){
        console.log(error);
        toast.error('something went wrong');
    }
})

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{},

    // jab hum thunks ke basis pe apne state ko update karna chahte ho toh hum extraReducers update karte hai.
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.productsData = action.payload?.data?.data
        })
    }
})

export default productSlice.reducer;



// understanding the flow 

// product slice banao
// store pe jake set karo 
// agar state manage karna hai toh extraReducers ka use karo
