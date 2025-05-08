import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login(data) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder for actual login logic
    console.log("Login details:", { email, password });

    alert(`Email: ${email}`);

    alert("Logged in..!");
    console.log(data);

    if(`Email: ${email}!=null`)
    {
    axios.get(`http://localhost:9191/enq/showdata/${email}/${password}`)
    .then((res)=>{
    console.log(res.data);
    localStorage.setItem("user", JSON.stringify(res.data));
    navigate('/dashboard');
    })

    .catch((error)=>console.log(error))
  }
  else{
    alert("Something wen wrong...!!")
  }
  
    

}
  

  return (
    <div className="flex h-screen" >
    {/* Side nav with background image */}
    <div className="w-1/2 bg-cover bg-center hidden md:block"
    style={{
      backgroundImage: `url('src/assets/image.png')`,
    }}>
    </div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
         <br></br>

        {/* Username */}
        <label className="block mb-2 text-gray-700 font-medium">Email:-</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter your username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
       <br></br>
        {/* Password */}
        <label className="block mb-2 text-gray-700 font-medium">Password:-</label>
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded mb-6"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br></br>
        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-black py-2 rounded hover:bg-blue-700"
        >
        Login
        </button>
      </form>
    </div>
    </div>
  )
};
export default Login;