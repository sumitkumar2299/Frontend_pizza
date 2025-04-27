
import { useState } from "react";
import toast from "react-hot-toast";
import SignupPresentation from "./SignUpPresentation";

import { createAccount } from "../../Redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'


// container for the signup page 
 function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();



    const[signUpState, setSignUpState] = useState({
        firstName:'',
        email:'',
        mobileNumber:'',
        password:''
    })

    function HandleUserInput(e){
        const{name,value} =  e.target;
        setSignUpState({
            ...signUpState,
            [name]:value
            })
    }

    async function HandleFormSubmit(e){
        e.preventDefault(); // prevent the form from reloading the page 
        console.log(signUpState);


        // Add validation to the form input 

        if(!signUpState.email || !signUpState.mobileNumber || !signUpState.password || !signUpState.firstName){
            toast.error('missing value from the form');
            return
        }
        if(signUpState.firstName.length<5 || signUpState.firstName.length>20){
            toast.error('First name must be greater than 5 character and less than 20 character long ')
            return
        }
        // check email
        if(!signUpState.email.includes('@') || !signUpState.email.includes('.')){
            toast.error("email is not valid");
            return;
        }

        // check mobile number length between 10 to 12 

        if(signUpState.mobileNumber.length<10 || signUpState.mobileNumber.length>12){
            toast.error("invalid mobile number");
            return;
        }

        const apiResponse = await dispatch(createAccount(signUpState));
        console.log("Api response", apiResponse);
        if(apiResponse.payload.data.success){
            navigate('/auth/login');
        }
    }

  return(
    <SignupPresentation HandleFormSubmit={HandleFormSubmit} HandleUserInput={HandleUserInput}/>
  )
 }
 
 export default Signup;
