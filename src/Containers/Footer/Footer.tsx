import FooterLink from "../../Components/FooterLink/FooterLink";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <FooterLink
        labelText="Want to learn more? Check out my Portfolio: "
        imgSrc="img source here"
        imgAltDest="Portfolio"
      />
      <FooterLink
        labelText="I also have a github page where I've uploaded all of my projects. You can view it here: "
        imgSrc="img source here"
        imgAltDest="Github"
      />
      <FooterLink
        labelText="Finally if you want a better look at my professional background, my LinkedIn can be found here: "
        imgSrc="img source here"
        imgAltDest="LinkedIn"
      />
    </div>
  );
};

export default Footer;
