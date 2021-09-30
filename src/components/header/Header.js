import "./header.css";
import home from "../../images/home.png";
import line from "../../images/vertical-line.png";

function Header() {
  return (
    <a href="#slide1">
      <div className="header">
        <img src={home} alt="" className="home" />
        <img src={line} alt="" className="line" />
        <div className="name">project</div>
      </div>
    </a>
  );
}

export default Header;
