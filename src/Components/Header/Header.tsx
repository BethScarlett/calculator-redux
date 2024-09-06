import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__main">The Calculator 🧮</h1>
      <h2 className="header__sub">
        You've got math.<a className="header__sub header__sub--problem">problems?</a> We've got math.<a className="header__sub header__sub--solution">solutions.</a> 
      </h2>
    </div>
  );
};

export default Header;
