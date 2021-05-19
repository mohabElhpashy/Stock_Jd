import React,{Fragment,useState} from 'react'
import { useHistory} from "react-router-dom";

import Axios from 'axios'
import Content from './Content'
function Login({log}) {
    const history=useHistory();
    const [Input,setInput]=useState({ email:"",password:""})
    const [t,sett]=useState(false)


    const  Login=()=>{
     Axios.post('https://trading-stock.herokuapp.com/authentication/login',Input).then(res=>{
          localStorage.setItem('token',res.data.token)
          localStorage.setItem('Auth',true)
          localStorage.setItem('gitaccess',true)
          window.location="/"

          log()
        }).catch(
          err=>{
            console.log("There is error",err)
          }
        )
          }
    return (
        <div>
             {localStorage.Auth?     <Content/>:
        <Fragment>
            <input value={Input.email} placeholder='email' onChange={e=>setInput({...Input,email:e.target.value})}/><br/>
        <input value={Input.password} placeholder='password'onChange={e=>setInput({...Input,password:e.target.value})}/><br/>


        <button onClick={Login}>Login</button>
        </Fragment>
        } 
        </div>
    )
}

export default Login
