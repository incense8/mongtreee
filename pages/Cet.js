import Class from "../styles/Cet.module.css"
import Navbar from "../Homepage/Navbar"
import Allabout from "../CET/Allabout"
import Eligible from "../CET/Eligible"
import Application from "../CET/Application"
import  Footer from "../Homepage/Footer"
export  default function CET(){
    return (
       <div className={Class.CetHolder}>
           <Navbar/>
           <Allabout/>
           <Eligible/>
           <Application/>
           <Footer/>
        </div>
    )
}