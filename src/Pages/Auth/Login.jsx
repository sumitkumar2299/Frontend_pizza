import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const[loginData, setLoginData] = useState({
        email:"",
        password:""
    })
    function handleUserInput(e){
        const {name,value} = e.target;
        setLoginData({
            ...loginData,
            [name]:value
        })
    }
    async function handleFormSubmit(e){
        e.preventDefault();
        console.log(loginData);

        // Add validation for the form input 
        if(!loginData.email || !loginData.password){
            toast.error("Missing values from the form")
            return
        }

        // check email 
        if(!loginData.email.includes('@')||!loginData.email.includes('.')){
            toast.error("invalid email address")
            return;
        }
    }
    return (
       <>
       </>
        
        
                   

                    
                    

                 
    )
}
export default Login;