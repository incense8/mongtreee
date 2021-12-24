
 import Class from "./style/MoreInfo.module.css"

export default function MoreInfo(){
    return (
        <div className={Class.MoreInfo_Section}>
                    <div className={Class.MoreInfo_Holder}>
                        <div className={Class.CETinfo}>
                                 <div className={Class._CETSVG}>
                                     <img src="CETMORE1.svg" alt="" />
                                 </div>
                                 <div className={Class.CET}>
                                 <div className={Class.Segment_heading}>
                                         <span>CET</span>
                                     </div>
                                     <div>
                                           <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, deleniti. Voluptate, quae consequatur!</span>
                                     </div>
                                 </div>
                        </div>
                        <div className={Class.CETinfo}>
                               
                                 <div className={Class.CET}>
                                     <div className={Class.Segment_heading}>
                                         <span>LEET</span>
                                     </div>
                                     <div>
                                           <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, deleniti. Voluptate, quae consequatur!</span>
                                     </div>
                                       
                                 </div> 
                                  <div className={Class._CETSVG}>
                                     <img src="CETMORE1.svg" alt="" />
                                 </div>
                        </div>
                        <div className={Class.CETinfo}>
                                 <div className={Class._CETSVG}>
                                     <img src="CETMORE1.svg" alt="" />
                                 </div>
                                 <div className={Class.CET}>
                                 <div className={Class.Segment_heading}>
                                         <span>Interview</span>
                                     </div>
                                     <div className={Class.Segment_subheading}>
                                           <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, deleniti. Voluptate, quae consequatur!</span>
                                     </div>
                                 </div>
                        </div>

                        </div>   
        </div>
    )
}