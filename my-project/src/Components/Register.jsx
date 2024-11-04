import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { setisUserLoggedIn } from './Slice/Slice'
import { useNavigate } from 'react-router-dom'

function Register() {

    const[name,setname] = useState("")
    const[email,setEamil] = useState("")
    const[password,setPassword] = useState("")
    const[isLogin,setIslogin] = useState(false)
    const[isStrongPassword,setIsStrongPassword] = useState(false)


        const {isUserLoggedIn} = useSelector((store)=>store.users)
        const dispatch = useDispatch()
        const navigate = useNavigate()

        useEffect(()=>{
            console.log(isUserLoggedIn);
            
        },[])

   async function handleSubmit(e){
        e.preventDefault();
        if(isLogin){
            const obj = {
                email,
                password
            }
    
            try{
    
                const res  = await axios.post("http://localhost:10000/login",obj)
                console.log(res.data.status);
                if(res.data.status){
                    alert("You are logged in successfully")
                    dispatch(setisUserLoggedIn(true))
                    navigate("/home")
                }
            }catch(e){
    
                    console.log(e);
                    alert(e.response.data.message)   
            }

        }else{


            if(isStrongPassword){
                alert("please enter strong password");
                return;
            }
            const obj = {
                name,
                email,
                password
            }
    
            try{
    
                const res  = await axios.post("http://localhost:10000/register",obj)
                console.log(res.data.status);
                if(res.data.status){
                    alert("You Account created successfuuly")
                    setIslogin(true)
                }
            
    
            }catch(e){
    
                    console.log(e.response.data.nmessage);
                    alert(e.response.data.message)
                    
            }
        }

        
        
        
    }


    function handlePasswordUpdate(e){
        setPassword(e)

            if(e.length < 8 ){
                setIsStrongPassword(true)
            }
            else{
                setIsStrongPassword(false)
            }
    }

  return (
    <>
        <form onSubmit={handleSubmit} className='flex flex-col w-full items-center justify-center'>
           <div className='w-3/12 border-2 flex flex-col items-center justify-center'>
           {
            !isLogin ?  <h1 className='text-center'>Register Your account</h1> :  <h1 className='text-center'>Login Your account</h1>
           }
           
           {
            !isLogin &&  <div className='flex items-center justify-center'>
            <label>Name</label>
            <input type='text' value={name} placeholder='Enter your name' className='p-2 border-2' onChange={(e)=>setname(e.target.value)}></input>
            </div>

           }
        
            <div className='flex items-center justify-center'>
                <label>Email</label>
                <input type='email' value={email} placeholder='Enter your email' className='p-2 border-2' onChange={(e)=>setEamil(e.target.value)}></input>
            </div>

            <div className='flex items-center justify-center'>
                <label>Password</label>
                <input type='text' value={password} placeholder='Enter your password' className='p-2 border-2' onChange={(e)=>handlePasswordUpdate(e.target.value)}></input>

            </div>
            {
                isStrongPassword &&  <span className='text-red-400'>Please Enter a Strong Password with 8 Characters</span>
            }
            <input type='submit' value="Submit" className='p-2 border-2'></input>
            {
                isLogin ?  <h1>Don't have account <span className='text-blue-500 cursor-pointer' onClick={()=>setIslogin(!isLogin)}>Registere here</span></h1> :     <h1>Already have an Account <span className='text-blue-500 cursor-pointer' onClick={()=>setIslogin(!isLogin)}>Login here</span></h1>

            }
           </div>
        </form>

    </>
  )
}

export default Register