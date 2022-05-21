import React from 'react';
import { useNavigate } from 'react-router-dom';
import './user.css';
export default function User(){

    let navigate = useNavigate();
    function logout(){
            navigate(`/`);
    }

    function submit(){
        if(!localStorage.getItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_req`)){
            localStorage.setItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_req`,1)
        }else{
            var req = parseInt(localStorage.getItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_req`));
        }

        localStorage.setItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_title_${req}`,"leave letter");
        req++;
    }



    return(
    <div >
        <div class="msg1">
        <a id="greet1">Welcome </a>
        <a id="user_name1">{localStorage.getItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_name`)} </a> 
        <a id="pro">to DeptCoffer</a>
        </div>
        <div class="container">
        <h1>Request Status</h1>
        <p class="para">No request found</p>
        
        <h1 id="h12">Add new Request</h1>
        <br></br>
        <div class="req">
        <h3 id="req1" className="title" >Request title</h3><input className='title'/>
        <br></br>
        <br></br>
        <h3 id="req2" className="sub" >Request Subject</h3><input className='subject'/>
        <br></br>
        <br></br>
        <h3 id="req3" className="des" >Request Description</h3><input className='description '/>
        <br></br>
        <br></br>
        </div>
       <button onClick={submit} className="btn btn-success" type="submit">Submit</button>
        <button onClick={logout} id="logout" className="btn btn-success" type="submit">Logout</button>
    </div>
    </div>
    );
}