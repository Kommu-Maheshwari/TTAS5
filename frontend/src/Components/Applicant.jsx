import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Applicant = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    
    
    const [error,setError]=useState(null)
   
    const navigate= useNavigate()
    axios.defaults.withCredentials= true;
  
    const handleSubmit =(event) =>{
    event.preventDefault()
    axios.post('http://localhost:3000/auth/applicantlogin',values)
    
    .then(result=>{
      // if(result.data.loginstatus){
        navigate('/applicantdashboard')

      // }else{
         // setError(result.data.Error)
      // }
        })
        
        
    .catch(err => console.log(err))
   }



  return (
   
       <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
               <div className='text-danger'>
                {error&&error}
               </div>
                <h2>Login page</h2>
                <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email'
                         onChange={(e) => setValues({...values, email: e.target.value})}    className='form-control rounded-0' autoComplete='off'/>
                    </div>
                    <div className="mb-3" >
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                         onChange={(e) => setValues({...values, password: e.target.value})}    className='form-control rounded-0' />
                    </div>
                  
                    <button type='submit' className='btn btn-success w-100 rounded-0 mb-2'> Log in</button>
                    

                  
                </form>
            </div>
        </div>


   
  )
}

export default Applicant
