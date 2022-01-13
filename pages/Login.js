import Class from "../styles/Login.module.css";
import axios from "axios";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

export default function Login() {
  const [passwordshow , setpasswordshow] = useState(false)
  const [info, setinfo] = useState({
    Email: "",
    Password: "",

  });

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setinfo({ ...info, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    

    try {
      const data =  await axios.post(`${process.env.Backend}/api/vi/user/Login`, info );
      const jsondata = data.json()
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={Class.LoginContainer}>
      <div className={Class.Login_Heading_svg_Section}>
        <div className={Class.Login_Heading_Section}>
          <div>
            <span>Sign In & be a Part of our learning community</span>
          </div>
        </div>
        <div className={Class.Login_svg_section}>
          <div className={Class.Login_svg}>
            <img src="/Signup_jpg.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className={Class.Form_section}>



          <div className={Class.Heading}>
 <h1>Create Account</h1>
          </div>
          <div className={Class.Form_Holding}>

      
        <form onSubmit={submit}>
            <div>
                            <div>
         <input type="Email" onChange={handlechange} name="Email" required  placeholder="Email" />       
            </div>
       
   
         <div>
  <input type=  {  passwordshow ? "password": "text"} onChange={handlechange}  required  name="Password" placeholder="Password"  />
            <div onClick={()=>setpasswordshow(!passwordshow)}>   {passwordshow ? <VisibilityIcon/> :<VisibilityOffIcon/> }    </div>
         </div> 
            </div>

         <div className={Class.button_holder}>
                <button type="submit" id={Class.Submit_button}  > Login</button>
         </div>
        
        
       
        </form>   
         </div>
      </div>
    </div>
  );
}
