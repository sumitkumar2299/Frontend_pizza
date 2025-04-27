
import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import toast from 'react-hot-toast'

const initialState = {
    isLoggedIn:localStorage.getItem('isLoggedIn') === 'true' || 'false',
    role:localStorage.getItem('role') || '',
    data: JSON.parse(localStorage.getItem('data')) || {}  
    // pahle yeh string ke form data aayega lekin humein chahiye object ke form toh json.
    // parse ka use karte hai 
}


// export const createAccount = createAsyncThunk('/auth/createAccount', async (data) => {
//     console.log("incoming data to the thunk", data);
//     try {
//         const response = axiosInstance.post('/users', data);    
//         toast.promise(response, {
//             success: (resolvedPromise) => {
//                 return resolvedPromise?.data?.message;
//             },
//             loading: 'Hold back tight, we are registering your id...',
//             error: 'Ohh No!, Something went wrong. Please try again.',
//         });
//         const apiResponse = await response;
//         return apiResponse;
//     } catch(error) {
//         console.log(error);
//     }
// });
 

export const createAccount = createAsyncThunk('/auth/createAccount',async(data)=>{
    console.log('incoming data to the thunk',data);
    try{
        const response =  axiosInstance.post('/users',data);
        toast.promise(response,{
            success:(resolvedPromise)=>{
                return resolvedPromise?.data?.message;
            },
            loading:"Hold back tight, we are registering your id...",
            error:'Ohh No, something went wrong. please try again'
        })

        const apiResponse = await response;
        return apiResponse;

    }catch(error){
        console.log(error);
    }
})

const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{}
});

export default AuthSlice.reducer;