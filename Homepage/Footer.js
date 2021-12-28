
import classes from "./style/Footer.module.css"
import Link from "next/link"
export default function Footer (){
    return (
        <footer className={classes.footer}>
        <div className={classes.footer_background}>
          <img src="/Backgroundimg.svg" alt="" />
        </div>
        <div className={classes.footerHeader}>
          <div className={classes.Company_info_moto}>
            <h2>_________</h2>
            <span> Know what you need..!!!!</span>
            <p>
              _______ is an Ed-Tech startup which is incubated at BKIF DSEU
              Shakarpur Campus, Govt. of NCT of Delhi
            </p>
            <span>
              Working on the pain points of the student which they face in their
              Learning phase.
            </span>
            <div className={classes.SocialMedia}>
              <div>
                <Link href="https://www.linkedin.com/in/prashantkashyyap?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFlG3gpXHQ4mbBIjWBCsMMA%3D%3D">
                  <img src="/linkedin.svg" alt="" />
                </Link>
              </div>
              <div>
                <Link href="https://www.instagram.com/helpy.dseu/">
                  <img src="/Instagram.svg" alt="" />
                </Link>
              </div>
              <div>
                <img
                  className={classes.Facebook_color}
                  src="/facebook.svg"
                  alt=""
                />
              </div>
              <div>
                <img src="/Twitter.svg" alt="" />
              </div>
            </div>
          </div>
          <div className={classes.FooterSeviceAndResources}>
            <div className={classes.Footer_Service}>
              {" "}
              <h2>Services</h2>
              <ul>
                <li>
                  <a href="/">Book Rental</a>
                </li>
                <li>
                  <a href="/">Mocks Interview</a>
                </li>
                <li>
                  <a href="/">Career Counselling</a>
                </li>
                <li>
                  <a href="/">Internships</a>
                </li>
                <li>
                  <a href="/">Trainings</a>
                </li>
  
                <li>
                  <a href="/">Hackathons</a>
                </li>
              </ul>
            </div>
  
            <div className={classes.Footer_Service}>
              <h2>Resoures</h2>
              <ul>
                <li>
                  <a href="/">Question Papers</a>
                </li>
  
                <li>
                  <a href="/">Notes</a>
                </li>
                <li>
                  <a href="/">Books</a>
                </li>
                <li>
                  <a href="/">Courses</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.Address_Section}>
            {" "}
            <div>
              <h2>Address</h2>
            </div>
            <div className={classes.Address_div}>
              <div className={classes.Address_inter_div}>
                <div>
                  <a href="https://www.google.com/maps/dir//Incense8/@28.6424318,77.259396,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cfd365e102251:0x43d1934166b6235d!2m2!1d77.2856327!2d28.630047">
                    <span>
                      BKIF, BPIBS Campus, Opp. Madhuban Colony, Near Nirman Vihar
                      Metro Station, Shakarpur, New Delhi, Delhi, India 110092
                    </span>
                  </a>
                </div>
                <div className={classes.Phoneno}>
                  <a href="tel: +91 785976257 "> +91 785976257 </a>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </footer>
    )
}