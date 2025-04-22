
import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn:localStorage.getItem('isLoggedIn') === 'true' || 'false',
    role:localStorage.getItem('role') || '',
    data: JSON.parse(localStorage.getItem('data')) || {}  
    // pahle yeh string ke form data aayega lekin humein chahiye object ke form toh json.
    // parse ka use karte hai 
}

export const createAccount = createAsyncThunk('/auth/createAccount',async(data)=>{
    console.log("incoming data to the thunk ",data);
    try{

    }catch(error){

    }
});


const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{}
});

export default AuthSlice.reducer;