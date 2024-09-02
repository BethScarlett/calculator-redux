import "./FooterLink.scss";

type FooterLinkProps = {
  labelText: string;
  imgSrc: string;
  imgAltDest: string;
};

const FooterLink = ({ labelText, imgSrc, imgAltDest }: FooterLinkProps) => {
  return (
    <div className="footer-link">
      <label>{labelText}</label>
      <img src={imgSrc} alt={`Link to ${imgAltDest}`} />
    </div>
  );
};

export default FooterLink;
