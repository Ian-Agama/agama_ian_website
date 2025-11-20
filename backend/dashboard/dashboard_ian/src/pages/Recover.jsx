import { useState } from "react";
import { axios } from "axios";
import {useNavigate} from "react-router-dom";

export default function RecoverPage (){

    const [ email ,setEmail ]= useState('');
    const [password, setPassword] =  useState('');

    
    const changePassword = (e)=> {
        const {name , password}  = e.target; 
        if(name === "email"){
            setPassword(value);
        }
        return;
    }
    const changePage = async () => {
        // send an alert and return to the login page 
        try {
        const response = await axios.post( "http://localhost:8000/login",{
            email,
    })
    console.log(response.data);

    }catch(error){
        alert(error.response?.data || "login failed");

    }
        return; 
    }
    return (
    <>
        <div>
            <p>Recovery page</p>
            <form action="" method="post" onSubmit={changePage}>
                <label htmlFor="email">email</label>
                <input type="text" value={email } name="email" />

                <label htmlFor="">new password</label>
                <input type="password" value={password} onChange={changePassword}/>
            </form>
        </div>
    
    </>
)}
