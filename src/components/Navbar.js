import airbnb from "../images/airbnb-logo.png";

function Navbar() {
  return (
    <navbar className="navbar">
      <img className="navbar-logo" src={airbnb} />
    </navbar>
  );
}

export default Navbar;
