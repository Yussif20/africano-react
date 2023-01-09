import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Nav, NavContainer } from "./Navbar-styles";

function Navbar() {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <NavContainer>
      <Nav>
        <h2>Africano</h2>
        <nav ref={navRef}>
          <a href="#">Home</a>
          <a href="#">about</a>
          <a href="#">support</a>
          <a href="#">visit</a>
          <button className="nav-btn nav-close-btn" onClick={showNav}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNav}>
          <FaBars />
        </button>
      </Nav>
    </NavContainer>
  );
}

export default Navbar;
