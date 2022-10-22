import React from 'react'
import link  from "react-router-dom"
import styles from "../styles/Admin.css" 
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useDispatch } from 'react-redux'
import { setIsLoggedIn } from '../redux/reducer'
import "../styles/Admin.css"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import app from "../firebaseConfig.js"

function Login() {
    const auth = getAuth(app);
    const dispatch = useDispatch()
    
    const [loginData, setloginData] = useState({
        email: "",
        password:""
    })

    const [errorText, seterrorText] = useState({
        emailError: "",
        passwordError: ""
    })
   
    const signInUser = async() => {
    try {
            
   const res = await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
        if (res) {
     
            const user = res.user;
            console.log(user)
            alert("user signed in success fully")
            dispatch(setIsLoggedIn(true))
   }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        alert(errorMessage)
    }
}

    const createAccount = async () => {
        try {
        const res = await   createUserWithEmailAndPassword(auth, loginData.email, loginData.password)
            if (res) {
                const user = res.user;
                alert("user creation successful")
            }
  
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error.code, error.message)
            // ..
  
        }
     }
    
    const handleLogin = (e) => {
        e.preventDefault()
       
        if (loginData.email === "") {
            seterrorText(
                {
                   ...errorText, emailError: "Email is required"
               }
           )
        } else if (loginData.password === "") {
            seterrorText(
                {
                   ...errorText, passwordError: "Password is required"
               }
           )
        }
   else if (loginData.email !== "" && loginData.password !== "") {
    seterrorText(
        {
           passwordError:"", emailError: ""
       }
   )
            signInUser()
        } 
    }


    const handleSignUp = (e) => {
        e.preventDefault()
       
        if (loginData.email === "") {
            seterrorText(
                {
                   ...errorText, emailError: "Email is required"
               }
           )
        } else if (loginData.password === "") {
            seterrorText(
                {
                   ...errorText, passwordError: "Password is required"
               }
           )
        }
   else if (loginData.email !== "" && loginData.password !== "") {
    seterrorText(
        {
           passwordError:"", emailError: ""
       }
   )
            createAccount()
        } 
    }
    return (
        <div className="admin">
           
            <div className={ "admin__container"}>
                <h1>Login</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" placeholder="Please enter your email." onChange={(e) => {
                        setloginData({...loginData,
                            email: e.target.value
                        })
                    }} required={ true } />
                    <div className={"admin__error"}>{ errorText.emailError }</div>
                    <h5>Password</h5>
                    <input type="password" placeholder="Please enter your password." onChange={(e) => {
                         setloginData({...loginData,
                            password: e.target.value
                        })
                    }} required={ true } />
                    <div className={'admin__error'}>{ errorText.passwordError }</div>
                    <button onClick={handleLogin} className={"admin__LoginIn"}>Login In</button>
                    <button onClick={handleSignUp} className={"admin__SignIn"}>Sign Up</button>
                </form>
                
            </div>
        </div>
        
    )
}

export default Login