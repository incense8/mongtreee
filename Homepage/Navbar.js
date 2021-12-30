import Class from "./style/Navbar.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const [Ham, setHam] = useState(true);
  const router  = useRouter()

  return (
    <div className={Class.Navbar_Holder}>
      {/** company info */}
      <Link href="/">
        <div className={Class.Company_infoHolder}>
          <div className={Class.company_info_logo}>
            <div className={Class.LogoImg}>
              {" "}
              <img src="/Logo.svg" alt="" />
            </div>
            <div className={Class.DESUCET}>
              <span>DESU CET</span>
            </div>
          </div>
        </div>
      </Link>
      {/** Signup and login  Burgermenu using useState for changing Mobile view condtion */}
      <div className={Class.UserIntercation_section}>
        <div className={Class.SignupLoginSection}>
          <div className={Class.Navbutton}>
            <button onClick={()=> router.push("/Signup")}>Signup</button>
          </div>
          <div className={Class.Navbutton}>
            {" "}
            <button onClick={()=>router.push("/Login")}>Login</button>
          </div>
        </div>
        <div
          className={Class.menu_holder}
          onClick={() => setHam(!Ham)}
        >
          {/**Menu bar */}
          <div className={  Ham ? Class.menu: Class.menu_change}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={Class.HamBurgerMenuOpton}>
            {/**Absolute position with Service and hamburger but css change after 1000px */}
            <div
              className={ Class.Service_provided } 
              style={    Ham ?         { display:"none"}  : {display:"flex"}       }
            >
              <ul>
                <li>
                  <a href="">School</a>
                </li>
                <li>
                  <a href="">Work</a>
                </li>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Learing app</a>
                </li>
                <li>
                  <a href="">Self Study</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
                <div className={Class.SignupLoginSectioninList}>
          <div className={Class.NavbuttoninList}>
            <button onClick={()=> router.push("/Signup")}>Signup</button>
          </div>
          <div className={Class.NavbuttoninList}>
            {" "}
            <button onClick={()=>router.push("/Login")}>Login</button>
          </div>
        </div>
              </ul>
          
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
