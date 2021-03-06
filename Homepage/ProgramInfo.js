
 import Class from "./style/MoreInfo.module.css"
 import Link from "next/link"

export default function MoreInfo(){
    return (
        <div className={Class.MoreInfo_Section}>
            <div className={Class.MoreInfo_Titile}>
                 <span>More Details</span>
                 <hr />
            </div>
                    <div className={Class.MoreInfo_Holder}>
                        <div className={Class.CETinfo}>
                                 <div className={Class._CETSVG}>
                                     <img src="/moreinfoCet.png" alt="" />
                                 </div>
                                 <div className={Class.CET}>
                                 <div className={Class.Segment_heading}>
                    
                                         <span>CET (Common Entrance TEST)</span>
                                <hr />
                                     </div>
                                     <div className={Class.Segment_subheading}>
<span>Get admission in professional courses after 10th, Be  ready to  step ahead in professionalism. </span >                         
         
<div><Link href="/Cet"><a href="/">Know More</a></Link></div>  
 </div>

                                 </div>
                        </div>
                        <div className={Class.CETinfo}>
                               
                                 <div className={Class.CET}>
                                     <div className={Class.Segment_heading}>
                                         <span>LEET (Lateral Entry Entrance TEST)</span>
                                         <hr />
                                     </div>
                                     <div className={Class.Segment_subheading}>
                                         
                                           <span>Plan Your Journey after  Diploma,Get admission in B.Tech  with full preparation and with full potential..</span>
                                                 <div><Link href="/"><a href="/">Know More</a></Link></div>
                                     </div>
                                       
                                 </div> 
                                  <div className={Class._CETSVG}>
                                     <img src="MoreinfoLeet.jpg" alt="" />
                                 </div>
                        </div>
                        <div className={Class.CETinfo}>
                                 <div className={Class._CETSVG}>
                                     <img src="/Moreinfointerview.svg" alt="" />
                                 </div>
                                 <div className={Class.CET}>
                                 <div className={Class.Segment_heading}>
                                         <span>Interview Preparation</span>
                                         <hr />         </div>
                                     <div className={Class.Segment_subheading}>
<span>Tips & Tricks to perform better in Interview and leave a classy Impression </span>
<div><Link href="/"><a href="/">Know More</a></Link></div>

                                     </div>
                                 </div>
                        </div>

                        </div>   
        </div>
    )
}