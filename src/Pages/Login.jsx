import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/UserContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  let {logIn} =  useContext(UserContext)
  const [user, setUser] = useState({ email: "", password: ""});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  
  const inputsChange = (event)=>{
  let newUser ={...user}
  newUser[event.target.name]= event.target.value
  setUser(newUser)
  console.log(newUser)
  }
  const formSubmit =async (e)=>{
      e.preventDefault()
      setErr(null);
      setLoading(true)
      try{
         const data =await logIn(
            user.email,
            user.password,
          );
          if(data.user && data.session){
            navigate("/navbar")
        }
       else{
        console.error("no valid data")
       }
      }
      catch(error){
          console.log(error)
          setErr(error.message || "Error!!");
      }
      finally {
          setLoading(false);
        }

  }
  return (
      <div className="content-card m-auto w-50 ">
      <h3 className="mb-4">Log In</h3>

          <form onSubmit={formSubmit}>
              <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label" name="email">Email address</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"name="email" onChange={inputsChange} />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label"name ="password">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={inputsChange} />
              </div>
              {/* <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div> */}
              <button type="submit" className=" button">Submit</button>
              <div className="mb-3">
                   <p>Don't Have account?<Link to={'/signup'}>signup</Link></p>
                </div>
          </form>
      </div>
  )
}
