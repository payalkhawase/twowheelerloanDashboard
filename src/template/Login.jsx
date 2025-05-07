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
 }

  return (
    <div>
        
        <form onSubmit={handleSubmit(onLogin)}>
          Username : <input type="text" {...register('username')} />  <br/><br/>
          Password : <input type="password" {...register('password')} />  <br/><br/>

          <button type="submit"> LOGIN </button>  <br/><br/>
        </form>
    </div>
  )
}

export default Login;