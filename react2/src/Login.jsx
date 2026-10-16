import { useState } from "react";
import Counter from "./Counter";
import {Link} from 'react-router-dom';

function Login(){

    const [pwd1, setPwd1] = useState("");
    const [pwd2, setPwd2] = useState("");

    const [same, setSame] = useState(true);
    const [match, setMatch] = useState(true);

    function handlePwd1Change(event){
        setPwd1(event.target.value);
        //console.log(event.target.value);
    }

    function handlePwd2Change(event){
        setPwd2(event.target.value);
        //console.log(event.target.value);
        if(pwd1==event.target.value){
            setMatch(true);
            console.log('Same');
        }else setMatch(false);
    }

    return(


        <>

            <Counter/>
            <Link to='/'>Home</Link>
            <form style={{width:"50%", margin:"auto"}}>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control"/>
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input value={pwd1} onChange={handlePwd1Change} type="password" className="form-control" />
  </div>
  <div className="mb-3">
    <label className="form-label">Re-enter Password</label>
    <input value={pwd2} onChange={handlePwd2Change} type="password" className="form-control" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" >Check me out</label>
  </div>
  {!match && <p>Passwords don't Match</p>}
  <button type="submit" className="btn btn-primary">Create Account</button>
</form>
        </>
    )
}

export default Login