import "./css/Footer.css";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <>
      <div className="footer_left">
        <div id="links_left">
          <a href="Impressum">Impressum</a>
          <a href="Kontakt">Kontakt</a>
          <a href="Versand">Versand</a>
        </div>
        <div id="links_right">
          <a href="Newsletter">Newsletter</a>
          <a href="Hilfe">Hilfe</a>
          <a href="FAQ">FAQ</a>
        </div>
      </div>
      <div className="footer_right">
        <div id="facebook">
          <a href="https://de-de.facebook.com/" target="_blank">
          <img src={facebook}/>
          </a>
        </div>
        <div id="instagram">
        <a href="https://www.instagram.com/" target="_blank">
          <img src={instagram} width="60px" />
          </a>
        </div>
        <div id="twitter">
          <a href="https://twitter.com/" target="_blank">
          <img src={twitter}/>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
