import Class from "./style/Hero.module.css"

export default function Hero (){
    return(
        <div className={Class.Herodiv_container}>
                {/**company Mote section */}
                <div className={Class.Moto_holder}>

                    <div className={Class.Moto}>
                 <span>Hit your best short </span><br/>
                  <span>In Life with use</span>
                      
                    </div>
                    <div className={Class.MotoSubheading}><span>Learn from the best tobe the best !!!</span></div>
                    <div className={Class.Hero_divSignup}><button>Join now</button></div>
                </div>

            {/**Svg provided for  Hero div */}
                  <div className={Class.HeroImg}>
                      <img src="/Herodivimg.svg" alt="" />
                  </div>
        </div>
    )
}