import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function RegisterData() {
    const [name, setName ] = useState('')
    const [email, setEmail ] = useState('')
    const [password, setpassword ] = useState('')
    const [confirmPassword, setconfirmPassword ] = useState('')


    const [error,seterror] = useState({})
    const [ValidiInput,setVAlidInput] = useState(false)
    const HandleOnChange = e => {
        if(e.target.name == "name"){
            setName(e.target.value)
            console.log(name)
          }
        else if(e.target.name == "password"){
            setpassword(e.target.value)
            console.log(password)
          }
        else if(e.target.name == "email"){
            setEmail(e.target.value)
            console.log(email)
          }
       
        else if(e.target.name == "confirmPassword"){
            setconfirmPassword(e.target.value)
            console.log(confirmPassword)
          }
        }
        
            
        const handleSubmit = (e) =>{
            e.preventDefault();
            if(name === ''){
              seterror(error =>({...error,name:'Please enter your name'}))
              setVAlidInput(false)
            }
            else if(name.length < 3){
              seterror(error =>({...error,name:'You can not enter less than 3 character'}))
              setVAlidInput(false)
            }
            else if(name.length > 30){   
              seterror(error =>({...error,name:'You can not enter more than 30 character'}))
              setVAlidInput(false)
            }
            else{
              seterror(error=>({...error,name:''}))
              setVAlidInput(true)
            }
            
        
            if(password === ''){
              seterror(error=>({...error,password:'Please enter your password'}))
              setVAlidInput(false)
            }
            else if(password.length < 10){
              seterror(error=>({...error,password:'You can not enter less than 10 character'}))
              setVAlidInput(false)                
            }
            else{
              seterror(error=>({...error,password:''}))
              setVAlidInput(true)
            }

            if(email === ''){
                seterror(error =>({...error, email:'Please enter your email id'}))
                setVAlidInput(false)
          
              }
            else{
                seterror(error=>({...error,email:''}))
                setVAlidInput(true)
              }
              
            if( confirmPassword === ''){
                seterror(error=>({...error,confirmPassword:'please enter confirm password'}))
                setVAlidInput(false)
              }
            else if(password !== confirmPassword){
                seterror(error=>({...error,confirmPassword:'Password does not match'}))
                setVAlidInput(false)
              }
            else if(password === confirmPassword){
                seterror(error=>({...error,confirmPassword:''}))
                setVAlidInput(true)
              }
             else{
                seterror(error=>({...error,contact:''}))
                setVAlidInput(ValidiInput+1)
                setVAlidInput(true)}
              if(ValidiInput){
                confirm('Registration successfull!')
              }
              console.log(ValidiInput)
                }

  return (
    <div id='register'>
      <h1 id='title1'>Create Account</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <div id='box'>
        <input type="text" placeholder='Your name' id='nameBox' onChange={(e)=>HandleOnChange(e)} name='name'/>
        <p id='error'>{error.name}</p>
        <input type="email" placeholder='Your email' id='emailBox' onChange={(e)=>HandleOnChange(e)} name='email'/>
        <p id='error'>{error.email}</p>
        <input type="password" placeholder='Your password' id='passwordBox' onChange={(e)=>HandleOnChange(e)} name='password'/>
        <p id='error'>{error.password}</p>
        <input type="password" placeholder='Repeat your password' onChange={(e)=>HandleOnChange(e)} id='repeatPasswordBox' name='confirmPassword'/>
        <p id='error'>{error.confirmPassword}</p>
      </div> 

        <div id='checkbox'>
        <input type="checkbox" id='checkbox'/>
        <p>I agree with all the statements in <a href="">terms of service</a></p>
        </div>
        <div>
        <button id='signUp'  type='submit' >SIGN UP</button>
        </div>
        <h2 id='have'>Have already an account ?<Link to='/' > Login here</Link></h2>
        </form>
      </div>
  )
}

export default RegisterData
