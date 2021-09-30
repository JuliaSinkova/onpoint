import Header from "../header/Header";
import sperm1 from "../../images/sperm1.png";
import sperm2 from "../../images/sperm2.png";
import sperm3 from "../../images/sperm3.png";
import sperm4 from "../../images/sperm4.png";
import sperm5 from "../../images/sperm5.png";
import logo from "../../images/logo.png";
import "./slide2.css";
function Slide2() {
  return (
    <div className="slide2">
      <img src={sperm1} alt="" className="sperm1" />
      <img src={sperm2} alt="" className="sperm2" />
      <img src={sperm3} alt="" className="sperm3" />
      <img src={sperm4} alt="" className="sperm4" />
      <img src={sperm5} alt="" className="sperm5" />
      <div className="container">
        <Header />
        <div className="title">
          Текст <br /> сообщения
        </div>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a enim
          sem. Integer bibendum pellentesque eros nec tincidunt. Aliquam nisi
          sapien, venenatis non nunc ac, placerat pulvinar arcu. Donec sed lacus
          cursus, faucibus tortor et, aliquet eros. Phasellus tincidunt, diam id
          egestas scelerisque, lacus nibh porttitor dolor, id rhoncus est ex id
          arcu. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Quisque id ante ut nunc tincidunt
          laoreet. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Sed aliquet placerat ipsum at maximus.
          Nam dignissim elementum orci in dapibus. Duis accumsan nibh turpis, eu
          facilisis ipsum pharetra nec. Vivamus et odio a felis tempor dapibus
          id at sem. Donec suscipit arcu quis odio commodo luctus. Nunc sed nisl
          neque. Donec malesuada arcu vel eleifend aliquam. Mauris congue at
          ipsum quis posuere. Vestibulum vehicula elit id dui commodo, a commodo
          dolor iaculis. Nulla ultricies odio quis mauris pulvinar, eget finibus
          orci porta. Nam quis ipsum id urna interdum convallis. Praesent nec
          ligula eros. Suspendisse vestibulum, nisl nec posuere tincidunt, nisi
          massa molestie lectus, in auctor eros urna et mi. Nunc volutpat risus
          efficitur mi semper, vitae tincidunt orci ultrices. Morbi bibendum
          diam at leo tempus interdum. Praesent risus lectus, convallis ut quam
          at, auctor scelerisque lectus. Vivamus vulputate ante quis enim
          pellentesque, at sollicitudin arcu viverra. Nam viverra libero non
          dolor elementum iaculis. Fusce ante nisl, blandit eu tincidunt vitae,
          fringilla eget risus. Proin dolor lorem, tincidunt sed ante eu,
          elementum gravida eros. Donec faucibus ac felis at semper. Sed finibus
          nisl nisl, eget cursus erat elementum non. Aenean blandit ante nec
          fringilla hendrerit. Aenean fringilla urna a scelerisque cursus. Donec
          eu tempor nunc. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Suspendisse blandit eget augue vitae hendrerit. Integer ac erat
          diam. Vivamus id ornare dolor. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Aliquam a
          fringilla sem. Etiam eu dolor dapibus, bibendum quam sed, convallis
          magna. Praesent aliquam ante in viverra egestas. Nulla tempus nisi in
          lectus fringilla ultrices. Phasellus in accumsan felis. Donec semper
          lectus eget ante finibus, non pulvinar dui volutpat. Donec quis mi
          bibendum, iaculis libero quis, molestie erat. Fusce commodo magna vel
          augue blandit, quis iaculis erat bibendum. Duis rutrum, justo vitae
          faucibus mollis, diam est commodo ligula, eget sodales felis lacus at
          sapien. Sed luctus ex neque, fringilla porttitor enim varius vitae.
          Donec gravida, mi nec malesuada lacinia, ligula enim egestas lorem, id
          tristique enim orci ac turpis. Donec aliquet, dui vitae viverra
          ullamcorper, leo est porta sapien, non tincidunt lectus magna vel ex.
          Proin arcu lorem, pellentesque at mauris vel, bibendum iaculis orci.
          Suspendisse vel felis a dolor vulputate pellentesque. Vivamus vel
          luctus massa. Suspendisse sed diam sed dolor bibendum commodo. In sed
          volutpat ipsum. Nam vel ex non lacus ultrices efficitur ac non ante.
          In sed orci lobortis, porta mi eu, porta augue. Fusce dignissim nisi
          eget enim auctor, blandit egestas massa maximus. Vivamus nec auctor
          odio. Vivamus euismod, leo non sagittis ornare, risus turpis maximus
          enim, in venenatis lectus nisl in magna.
        </div>

        <img src={logo} alt="" className="logo" />
      </div>
    </div>
  );
}

export default Slide2;
