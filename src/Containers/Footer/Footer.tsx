import FooterLink from "../../Components/FooterLink/FooterLink";
import "./Footer.scss";
import profileIcon from "../../assets/Images/profile-icon.jpg";
import githubIcon from "../../assets/Images/github-icon.png";
import linkedInIcon from "../../assets/Images/linkedin-icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <FooterLink
        labelText="Want to learn more? Check out my Portfolio: "
        imgSrc={profileIcon}
        imgAltDest="Portfolio"
        imgLink="https://bethscarlett.github.io/portfolio-react/"
      />
      <FooterLink
        labelText="I also have a github page where I've uploaded all of my projects. You can view it here: "
        imgSrc={githubIcon}
        imgAltDest="Github"
        imgLink="https://github.com/BethScarlett"
      />
      <FooterLink
        labelText="Finally if you want a better look at my professional background, my LinkedIn can be found here: "
        imgSrc={linkedInIcon}
        imgAltDest="LinkedIn"
        imgLink="https://www.linkedin.com/in/bethany-burrows-252373280/"
      />
    </div>
  );
};

export default Footer;
