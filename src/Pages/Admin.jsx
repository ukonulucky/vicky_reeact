import React from 'react'
import link  from "react-router-dom"
import styles from "../styles/Admin.css" 
import { useState } from "react"
import axios from "axios"

function Login() {
    // const dispatch = useDispatch()
    //  const user = (user_email) => {
    //     return {
    //         type: "ASSIGN_USER",
    //         payload: user_email
    //    }
    // }
    
    // const history = useHistory()
    // const [cookies, setCookies] = useCookies(["user"]);
    
    const [loginData, setloginData] = useState({
        email: "",
        password:""
    })

    const [errorText, seterrorText] = useState({
        emailError: "",
        passwordError: ""
    })
    
    const post = async () => {
        try {
            const response = await axios.post("http://localhost:5000/admin_create", { loginData },{ withCredentials: true })
            const { data } = response
           console.log(response)
            if (response.status !== 201) {
                seterrorText(
                    {
                     emailError: data.email, passwordError: data.password
                    })
            }
            if (response.status === 201) {
                console.log(response.data)
                dispatch(user(response.data.email)) &&  history.push("/")
              
           }
        } catch (error) {
          console.log(error)
  
        }
     }
    
    const handleSubmit = (e) => {
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
            post()
        } 
    }
    return (
        <div className={  styles.login_one}>
           
            <div className={ styles.login_container}>
                <h1>Login</h1>
                <form action="" onSubmit={handleSubmit}>
                    <h5>E-mail</h5>
                    <input type="text" placeholder="Please enter your email." onChange={(e) => {
                        setloginData({...loginData,
                            email: e.target.value
                        })
                    }} required={ true } />
                    <div className={ styles.error}>{ errorText.emailError }</div>
                    <h5>Password</h5>
                    <input type="password" placeholder="Please enter your password." onChange={(e) => {
                         setloginData({...loginData,
                            password: e.target.value
                        })
                    }} required={ true } />
                    <div className={ styles.error}>{ errorText.passwordError }</div>
                    <button className={ styles.login_signinButton}>Sign In</button>
                </form>
                <Link  className={styles.link} to="/Password_retreive">
                   
                    Forgot PassWord? Click To Retreive Password
                   
    
               </Link>
                
            </div>
        </div>
        
    )
}

export default Login