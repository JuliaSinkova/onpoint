import Header from "../header/Header";
import bubble1 from "../../images/bubble1.png";
import bubble2 from "../../images/bubble2.png";
import bubble3 from "../../images/bubble3.png";
import bubble4 from "../../images/bubble4.png";
import bubble5 from "../../images/bubble5.png";
import bubble6 from "../../images/bubble6.png";
import bubble7 from "../../images/bubble7.png";
import bubble8 from "../../images/bubble8.png";
import bottle from "../../images/bottle.png";
import plate from "../../images/plate.png";
import calendar from "../../images/calendar.png";
import logo from "../../images/logo.png";
import "./slide3.css";

function Slide3() {
  return (
    <div className="slide3">
      <a name="slide2"></a>
      <img src={bottle} alt="" className="bottle" />
      <img src={bubble1} alt="" className="bubble1" />
      <img src={bubble2} alt="" className="bubble2" />
      <img src={bubble3} alt="" className="bubble3" />
      <img src={bubble4} alt="" className="bubble4" />
      <img src={bubble5} alt="" className="bubble5" />
      <img src={bubble6} alt="" className="bubble6" />
      <img src={bubble7} alt="" className="bubble7" />
      <img src={bubble8} alt="" className="bubble8" />

      <div className="container">
        <Header />
        <div className="wrapper">
          <div className="subtitle">Ключевое Сообщение</div> <br />
          <div className="title">
            Brend <b>XY</b>{" "}
          </div>
          <div className="flex">
            <div className="text-left">
              <img src={plate} alt="" className="plate" />
              Ehicula ipsum a acru cursus vitae. Eu non diam phasellus
              vestibulum lorem sed risus ultricies
            </div>
            <div className="text-right">
              <img src={calendar} alt="" className="calendar" />A arcu cursus
              vitae
            </div>
            <button
              className="btn"
              onClick={() =>
                (document.querySelector(".popup").style.display = "block")
              }
            >
              <div className="circle">
                <i class="fas fa-plus"></i>
              </div>
              <div className="btn-text">Подробнее</div>
            </button>
          </div>
        </div>
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="popup">
        <div className="popupmessage1">
          <span
            className="exit"
            onClick={() =>
              (document.querySelector(".popup").style.display = "none")
            }
          >
            <i class="fas fa-times"></i>{" "}
          </span>
          <div className="subtitle">Преимущества </div>
          <div className="title">
            Brend <b>XY</b>{" "}
          </div>{" "}
          <div className="number">01</div>
          <div>Lorem ipsum dolor sit amet, consectetur, adipiscing elit</div>
          <div className="number">02</div>
          <div>Faucibus pulvinar elementum integer enim </div>
          <div className="number">03</div>
          <div>Faucibus pulvinar elementum integer enim </div>
          <div className="popupcontrol">
            <i class="fas fa-chevron-left"></i>{" "}
            <span className="pinkcircle">
              <i class="fas fa-circle"></i>{" "}
            </span>
            <i class="far fa-circle"></i>{" "}
            <span
              onClick={() => {
                document.querySelector(".popupmessage1").style.display = "none";
                document.querySelector(".popupmessage2").style.display =
                  "block";
              }}
            >
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
        </div>
        <div className="popupmessage2">
          <span
            className="exit"
            onClick={() =>
              (document.querySelector(".popup").style.display = "none")
            }
          >
            <i class="fas fa-times"></i>{" "}
          </span>
          <div className="subtitle">Преимущества </div>
          <div className="title">
            Brend <b>XY</b>{" "}
          </div>{" "}
          <div className="number">01</div>
          <div>Mi bibendum neque egestas congue quisque egestas diam</div>
          <div className="number">02</div>
          <div>Venenatis lectus magna fringilla urna </div>
          <div className="number">03</div>
          <div>Venenatis lectus magna fringilla urna </div>
          <div className="popupcontrol">
            <span
              onClick={() => {
                document.querySelector(".popupmessage2").style.display = "none";
                document.querySelector(".popupmessage1").style.display =
                  "block";
              }}
            >
              {" "}
              <i class="fas fa-chevron-left"></i>{" "}
            </span>
            <i class="far fa-circle"></i>{" "}
            <span className="pinkcircle">
              <i class="fas fa-circle"></i>{" "}
            </span>
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide3;
