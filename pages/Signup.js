import Class from "../styles/Signup.module.css";
import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [info, setinfo] = useState({
    Email: "",
    Password: "",
    Phoneno: "",
    FullName: "",
  });

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setinfo({ ...info, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
   

    try {
      const data =await  axios.get(`${process.env.Backend}/api/vi/Signup`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={Class.SignupContainer}>
      <div className={Class.Signup_Heading_svg_Section}>
        <div className={Class.Signup_Heading_Section}>
          <div>
            <span>Sign In & be a Part of our learning community</span>
          </div>
        </div>
        <div className={Class.Signup_svg_section}>
          <div className={Class.Signup_svg}>
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
         <input type="Email" onChange={handlechange} name="Email" placeholder="Email" required />       
            </div>
          <div>
             <input type="text" onChange={handlechange} name="FullName" placeholder="Full Name" required   />  
              </div> 
         <div>
  <input type="tel" onChange={handlechange} name="Phoneno" placeholder="Phone no " required   />
         </div>
         <div>
  <input type="password" onChange={handlechange} name="Password" placeholder="Password"  required  />
         </div> 
            </div>

         <div className={Class.button_holder}>
                <button type="submit" id={Class.Submit_button}  > Sign up</button>
         </div>
        
        
       
        </form>   
         </div>
      </div>
    </div>
  );
}
