import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Class from "./style/Amazing.module.css";
export default function Amazing() {
  return (
    <div className={Class.AmazingContainer}>
      <div className={Class.AmazingHeading}>
        <div >
          <h1>Amazing things are happening </h1>
          <div className={Class.Amazingdown_border}></div>
        </div>
      </div>

         <div className={Class.Amazing_holder}>

             {/* <Slider 
             slidesToShow={2}
             dots={true}
             > */}
             <div className={Class.ScrollAblediv1}>  
                <div className={Class.Traiagnle_holder}>
                         <div className={Class.Traiagnle}></div>
                     </div>
                     <div className={Class.info_holding}>
                         <div className={Class.Info_heading}>
                         <div className={Class.Heading_of_info}>
                             <span>CET</span>
                           </div>
                         <div>
                           <span>Prepare Yourself for DSEU admission</span>
                         </div>
                         </div>
                       
                         <div className={Class.Info_Learn_more}>
                              <a href="/">Learn More</a>
                         </div>
                     </div>
                
             </div>
             <div className={Class.ScrollAblediv2}>
                     <div className={Class.info_holding2}>
                         <div className={Class.Info_heading2}>
                         <div className={Class.Heading_of_info2}>
                             <span>LEET</span>
                           </div>
                         <div>
                           <span>Move Forward after diploma</span>
                         </div>
                         </div>
                       
                         <div className={Class.Info_Learn_more3}>
                              <a href="/">Learn More</a>
                         </div>
                     </div>
                   
             </div>

             <div className={Class.ScrollAblediv3}>
             <div className={Class.Traiagnle_holder3}>
                         <div className={Class.Traiagnle3}></div>
                     </div>
                     <div className={Class.info_holding3}>
                         <div className={Class.Info_heading3}>
                           <div className={Class.Heading_of_info3}>
                             <span>Interview</span>
                           </div>
                         <div>
                           <span>Perform like pro Ina Interview</span>
                         </div>

                         
                         </div>

                       
                         <div className={Class.Info_Learn_more3}>
                              <a href="/">Learn More</a>
                         </div>

                         <div className={Class.Amazing3_img}>
                           <img src="/Amazing3.svg" alt="" />
                         </div>
                     </div>
                     <div className={Class.Traiagnle_holder3}>
                         <div className={Class.Traiagnle3}></div>
                     </div>
             </div>

{/*              
             </Slider> */}
         </div>

       
    </div>
  );
}
