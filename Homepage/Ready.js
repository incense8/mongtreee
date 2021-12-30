import Class from "./style/Ready.module.css";
export default function Ready() {
  return (
    <div className={Class.Ready_setup_div}>
      <div className={Class.Ready_backgroundimg}>
        <img src="/Backgroundimg.svg" alt="" />
      </div>

      <div className={Class.Ready_Section}>
        <div className={Class.Ready_holder}>
          <div className={Class.Ready_img}>
            <img src="/ReadytoLearn.jpg" alt="" />
          </div>
          <div className={Class.Ready_heading_holder}>
            <div className={Class.Ready_heading}>
              <h2>Ready to make Learning fun !</h2>
            </div>
        <div className={Class.Ready_SignupButton}>  <button>Sign up for free</button>   </div>
          </div>
        </div>
      </div>
    </div>
  );
}
