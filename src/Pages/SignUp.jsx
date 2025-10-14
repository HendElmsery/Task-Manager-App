import React, { useContext,useState } from 'react'
import { UserContext } from '../Context/UserContext'
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
    let {user,signUp} = useContext(UserContext)
    const [form, setForm] = useState({ email: "", password: "", confirm: "", firstName: "", lastName: "", age: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [err, setErr] = useState(null);
    
    const inputsChange = (event)=>{
    let newForm ={...form}
    newForm[event.target.name]= event.target.value
    setForm(newForm)
    console.log(newForm)
    }
    const formSubmit =async (e)=>{
        e.preventDefault()
        setErr(null);
        setLoading(true)
        try{
            const data =await signUp(
                form.email,
                form.password,
                form.firstName,
                 form.lastName,
            );
            if(data.user){
                navigate("/login")
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
        <div className="content-card">
        <h3 className="mb-4">Sign Up</h3>
  
            <form onSubmit={formSubmit}>
            <div className="mb-3">
                    <label htmlFor="exampleInputText1" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" name="firstName" onChange={inputsChange}/>
                    <div id="textHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputText1" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="exampleInputtext2" aria-describedby="textHelp"name="lastName" onChange={inputsChange} />
                    <div id="textHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" name="email">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"name="email" onChange={inputsChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label"name ="password">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={inputsChange} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn-primary">Submit</button>
                <div className="mb-3">
                   <p>Already Have account?<Link to={'/login'}>Login</Link></p>
                </div>
                
            </form>
        </div>
    )
}
