import Class from "./style/Testional.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Testional() {
  return (
    <div className={Class.TestionalSection}>
      <div className={Class.Testional_Holder}>
        <div className={Class.Testional_Heading}>
          {" "}
          <h1>What student says About us</h1>
        </div>
        <div className={Class.Holding_testional_CustumerCare}>
          <div className={Class.CustumerCare}>
            <div className={Class.Testional_Ilove_Image}>
              <span>I love these game</span>
            </div>
            <div className={Class.Testimonial_img}>
              <img src="/Custumerimg.png" alt="" />
            </div>
          </div>
          <div className={Class.Testional_partion}></div>
          <div className={Class.Testional}>
            <Slider
              slidesToShow={1}
              slidesToScroll={1}
              dots={false}
              autoplay={true}
              autoplaySpeed={5000}
              arrows={false}
            >
              <div className={Class.Testional_info}>
                <div>
                  <div className={Class.Testonal_name}>
                    <span>Prince Uppal | DITE (Wazirpur campus)</span>
                  </div>
                  <div className={Class.Testonal_Thoughts}>
                    <span>
                    Thinking about students, pain & delivering the cure well
                    </span>
                  </div>
                </div>
              </div>
              <div className={Class.Testional_info}>
                <div>
                  <div className={Class.Testonal_name}>
                    <span>Firdaus khan | IIT Dwarka ( Dwarka campus)</span>
                  </div>
                  <div className={Class.Testonal_Thoughts}>
                  <span>"Be a part of it, worth of Service"</span>

                  </div>
                </div>
              </div>
              <div className={Class.Testional_info}>
                <div>
                  <div className={Class.Testonal_name}>
                    <span>Faizal khan | Rajokari ( Rajokari campus)</span>
                  </div>
                  <div className={Class.Testonal_Thoughts}>
                  <span>"Giving dedication to the Students"</span>

                  </div>
                </div>
              </div>
              <div className={Class.Testional_info}>
                <div>
                  <div className={Class.Testonal_name}>
                    <span>Shivam pandey| DITE Okhla ( Okhla campus)</span>
                  </div>
                  <div className={Class.Testonal_Thoughts}>
                  <span>"Alwasys give better Services. "</span>

                  </div>
                </div>
              </div>
              <div className={Class.Testional_info}>
                <div>
                  <div className={Class.Testonal_name}>
                    <span>Faizal khan | Rajokari ( Rajokari campus)</span>
                  </div>
                  <div className={Class.Testonal_Thoughts}>
                  <span>"Giving dedication to the Students"</span>

                  </div>
                </div>
              </div>
              <div className={Class.Testional_info}>
                <div>
                  <div className={Class.Testonal_name}>
                    <span>Faizal khan | Rajokari ( Rajokari campus)</span>
                  </div>
                  <div className={Class.Testonal_Thoughts}>
                  <span>"Giving dedication to the Students"</span>

                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
