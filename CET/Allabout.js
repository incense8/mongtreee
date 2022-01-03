
 import Class from "./style/Allabout.module.css"

export default function Allabout(){
    return (
    
        <div className={Class.Allabout_holder}>
              <div  className={Class.Info_holder}>
                <div className={Class.Allabout_heading}>
                        <h1>All About CET..!!!!</h1>
             </div>
             <div className={Class.What_conatiner}> 
                 <div className={Class.What_is_CET}>

                     <h2>What is CET ?</h2>
                 </div>
                     <div className={Class.CETInfo}>
                        <span>
                        CET (Common Entrance Test) is an entrance exam which is organized by the  Government of NCT of Delhi every year for the students who are willing to take the admissions in the professional's courses diploma with specialization to get started their journey in professional life, just after their secondary education qualification, yes you heard right after the completion of their 10th, they are eligible to pursue diploma after that, In campuses which under Delhi Skill and Entrepreneurship University.
                        </span>
                     </div>          
                 </div>   
                 <div className={Class.Download_button}>
                     <div>
                                       <button>Download Syllabus</button>
       
                     </div>
                 </div>
               
              </div>
           
             <div className={Class.CETpageImgHolder}>
                 
                 <img src="/CETPageabout.png" alt="" />
             </div>
        </div>
    )
}