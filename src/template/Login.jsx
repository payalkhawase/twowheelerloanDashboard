
import React, { useState } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Login()
 {
  const {register, handleSubmit} = useForm();
 const navigate = useNavigate();
              <Link to="/dashboard" className="nav-link text-white"></Link>
  
  function onLogin(data){
    // e.preventDefault();
    // if (!(data.username) || !(data.password)) {
    //   setError('Please enter both username and password');
    //   return;
    // }
    // alert("Logged in ...!!");
  // console.log(data);
  console.log(`http://localhost:7777/adminlogin/getEmployee/${data.username}/${data.password}`);
  axios.get(`http://localhost:7777/adminlogin/getEmployee/${data.username}/${data.password}`)
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login()
 {
 const {register, handleSubmit} = useForm();
 const navigate = useNavigate();

 function onLogin(data)
 {
  alert("Logged in ...!!");
  console.log(data);

  axios.get(`http://192.168.1.5:9199/adminlogin/getEmployee/${data.username}/${data.password}`)
  .then((res)=>{
    console.log(res.data);
    localStorage.setItem("user", JSON.stringify(res.data));
    navigate('/dashboard');
  })
  .catch((error)=>console.log(error));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              {/* {error && <div className="alert alert-danger">{error}</div>} */}
              <form onSubmit={handleSubmit(onLogin)}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    // value={username}
                    {...register('username')}
                    placeholder="Enter Username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    // value={password}
                    {...register('password')} 
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
 }

  return (
    <div>
        
        <form onSubmit={handleSubmit(onLogin)}>
          Username : <input type="text" {...register('username')} />  <br/><br/>
          Password : <input type="password" {...register('password')} />  <br/><br/>

          <button type="submit"> LOGIN </button>  <br/><br/>
        </form>
    </div>
  );
};

export default Login;
