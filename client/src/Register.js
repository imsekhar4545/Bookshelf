import React,{useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import './register.css';

const Register = () => {
    const [data,setData] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/register',data).then(
            res => {alert(res.data);setData({
                username:'',
                email:'',
                password:'',
                confirmpassword:''
            })}
        )

    }
    return (
		<div className="signup-container">
			<div className="signup-form-container">
				<div className="le-ft">
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className="white-btn">
							Login
						</button>
					</Link>
				</div>
				<div className="r-ight">
					<form className="form-container" onSubmit={submitHandler}>
						<h2>
            				<span>B</span>ook
           				 	<span>S</span>helf - 
							<span>C</span>reate
							<span>A</span>ccount
          				</h2>
						<input
							type="text"
							placeholder="user name"
							name="username"
							onChange={changeHandler}
							value={data.firstName}
							required
							className="input"
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={changeHandler}
							value={data.email}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={changeHandler}
							value={data.password}
							required
							className="input"
						/>
                        <input
							type="password"
							placeholder="confirmpassword"
							name="confirmpassword"
							onChange={changeHandler}
							value={data.confirmpassword}
							required
							className="input"
						/>
						
						<button type="submit" className="g-reen-btn">
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Register
