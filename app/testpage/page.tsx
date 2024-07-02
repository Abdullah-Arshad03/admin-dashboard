'use client'
import React from 'react'
import axios from 'axios'
const TestPage = () => {


    const submitHandler =async ()=>{
   const res =  await axios.post('http://localhost:3000/api/users', { 
    username : "lmaooo",
    email:"Lmaoooo@gmail.com",
    password : "123456",
    phone : 1234,
    address : "lol 12345 lasdjkfkljflsjfdljflskjdf",
    isAdmin :false,
    isActive : true
    
 })

 console.log('This is test response' , res)
}
  return (<>
    <div>TestPage</div>
    <button onClick={submitHandler}>submit</button>
    </>
  )
}

export default TestPage