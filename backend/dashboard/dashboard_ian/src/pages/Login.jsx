import { useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
//import { useNavigate} from "react-router-dom";
//import {RecoverPage } from "./Recover.jsx" 
// const navigate = useNavigate();

export default function LoginForm(){
const [ email, setEmail ] = useState('');
const [ password, setPassword] = useState('')
const navigate = useNavigate();

    const handleSubmit = async (e) => {
         e.preventDefault()
        console.log(email)
        console.log(password)

        try { 
            const response = await axios.post("http://localhost:8000/login",{
            email, 
            password});

            console.log(response.data);
            alert(response.data);
           //redirect to the area of interest 
            //navigate("/dashboard");
            navigate("/dashboard");


        }catch(err){
            console.log(err.response?.data || err.message);
            alert(err.response?.data || "login failed")
        }

    
         }
    const handleChange = (e) => {
        const {name, value} = e.target;
        if(name === 'email'){
            setEmail(value);

        }
        else if(name === 'password'){
            setPassword(value)
        }
    }
    
    return (
    <>
        <div>
         <h1>login</h1> 
            <h2>welcome to the login screen</h2>
             <form action="" method="get" onSubmit={handleSubmit}>

                <label htmlFor="email">Email</label>   
                <input   type="text" value={email} name='email'onChange={handleChange}/>

                <label htmlFor="password">password</label>
                <input type="password" value={password} name='password' onChange={handleChange}/>

                <button type="submit">submit</button>    
            </form>    
            <Link to={"/login/identity"}>forgot password</Link>
        </div> 
    </>
)}
