import React from "react";
import "./slide1.css";
import "../../app.css";
import bacteria1 from "../../images/bacteria1.png";
import bacteria2 from "../../images/bacteria2.png";
import bacteria3 from "../../images/bacteria3.png";
import bacteria4 from "../../images/bacteria4.png";
import bacteria5 from "../../images/bacteria5.png";
import bacteria6 from "../../images/bacteria6.png";
import bacteria7 from "../../images/bacteria7.png";
import pinksperm1 from "../../images/pinksperm1.png";
import pinksperm2 from "../../images/pinksperm2.png";
import logo from "../../images/logo.png";
import Header from "../header/Header";
function Slide1() {
  return (
    <div className="slide1">
      <a name="slide1"></a>
      <img src={bacteria1} alt="" className="bacteria1" />
      <img src={bacteria2} alt="" className="bacteria2" />
      <img src={bacteria3} alt="" className="bacteria3" />
      <img src={bacteria4} alt="" className="bacteria4" />
      <img src={bacteria5} alt="" className="bacteria5" />
      <img src={bacteria6} alt="" className="bacteria6" />
      <img src={bacteria7} alt="" className="bacteria7" />
      <img src={pinksperm1} alt="" className="pinksperm1" />
      <img src={pinksperm2} alt="" className="pinksperm2" />
      <div className="container">
        <Header />

        <div className="title">
          <span className="hello">Привет,</span> <br />
          Это <span className="bold">не</span> коммерческое задание
          <button className="btn">
            <div className="circle">
              <i class="fas fa-arrow-right"></i>
            </div>
            <a href="#slide2">
              <div className="btn-text">Что дальше?</div>
            </a>
          </button>
        </div>
        <img src={logo} alt="" className="logo" />
      </div>
    </div>
  );
}

export default Slide1;
