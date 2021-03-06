import React from 'react';
import { useNavigate } from 'react-router-dom';
import './supervisor.css';
export default function Supervisor(){

    let navigate = useNavigate();
    function logout(){
            navigate(`/`);
    }



    return(
    <div>
        <div className='msg3'>
        <p><span id="greet3">Welcome </span>
           <b id="user_name3"> {localStorage.getItem(`name`)} </b>
            <span id="pro2">to DeptCoffer</span></p>
            </div>
            <div className='pen1'>
        <h1 className='h14'>Request Status</h1>
        {/* <p className='para2'>No request found for approval</p> */}
        <br></br>
        <table className='table2'>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Reg No</th>
                <th>Request-Title</th>
                <th>Supervisor-Status</th>
                <th>Admin-Status</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Aditya</td>
                <td>1913003</td>
                <td>Leave</td>
                <td><button className="btn btn-success" type="submit">Approved</button></td>
                <td><button className="btn btn-success" type="submit">Approved</button></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Arun</td>
                <td>1913009</td>
                <td>On-Duty</td>
                <td><button className="btn btn-success" type="submit">Approved</button></td>
                <td><button className="btn btn-danger" type="submit">Pending</button>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Gokulraja</td>
                <td>1913028</td>
                <td>Fees Structure</td>
                <td><button className="btn btn-success" type="submit">Approved</button></td>
                <td><button className="btn btn-success" type="submit">Delivered</button></td>
            </tr>
        </table>
        <br></br>
        <button onClick={logout} id="logout" className="btn btn-outline-success" type="submit">Logout</button>
        </div>
    </div>
    );
}