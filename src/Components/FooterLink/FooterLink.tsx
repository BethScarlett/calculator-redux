import "./FooterLink.scss";

type FooterLinkProps = {
  labelText: string;
  imgSrc: string;
  imgAltDest: string;
  imgLink: string;
};

const FooterLink = ({ labelText, imgSrc, imgAltDest, imgLink }: FooterLinkProps) => {
  return (
    <div className="footer-link">
      <label>{labelText}</label>
      <a className="footer-link__image" href={imgLink} target="_blank">
        <img src={imgSrc} alt={`Link to ${imgAltDest}`} />
      </a>
    </div>
  );
};

export default FooterLink;
