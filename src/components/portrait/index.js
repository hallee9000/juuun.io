import React from "react"
import hero from './images/hero.png'
import fan from './images/fan.png'
import propeller from './images/propeller.png'
import './portrait.styl'

export default props =>
  <div className="portrait">
    <div className="portrait-intro">Hey! I'm<span></span>Jun ☺.</div>
    <img className="portrait-me" src={hero} alt="我的身体"/>
    <img className="portrait-fan" src={fan} alt="我的扇子"/>
    <img className="portrait-propeller" src={propeller} alt="我的螺旋桨"/>
  </div>
