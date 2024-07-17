import { GlobeIcon } from "../assets/icons.jsx";

function Header() {
  return (
    <header>
      <div className="header-content">
        <GlobeIcon />
        <h1 className="header--title">my travel journal.</h1>
      </div>
    </header>
  );
}

export default Header;
