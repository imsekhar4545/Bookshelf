import React,{useState,useContext} from 'react'
import axios from 'axios';
import {store} from './App';
import { Redirect } from 'react-router';
import './login.css';
import {Link} from 'react-router-dom';

const Login = () => {
    const [token,setToken] = useContext(store)
    const [data,setData] = useState({
        email:'',
        password:'',
    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/login',data).then(
            res => setToken(res.data.token)
        )
    }
    if(token){
       return <Redirect to='/myprofile' />
    }
    return (
		<div className="login_container">
			<div className="login_form_container">
				<div className="left">
					<form className="form_container" onSubmit={submitHandler}>
						<h2>
            				<span>B</span>ook
           				 	<span>S</span>helf - 
							<span>L</span>ogin 
          				</h2>
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
						
						<button type="submit" className="green_btn">
							Login
						</button>
					</form>
				</div>
				<div className="right">
					<h1>New Here ?</h1>
					<Link to="/register">
						<button type="button" className="white_btn">
							Register
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Login;
