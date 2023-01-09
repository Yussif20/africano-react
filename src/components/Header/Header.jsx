import { Hero } from "./Header-styles";
import "../../index.css";

function Header() {
  return (
    <Hero>
      <h3> October 15 - 23</h3>
      <p>The Biggest Zoo In The Middle East Opening</p>
      <div>
        <button className="hero__btn btn-see">See More</button>
        <button className="hero__btn btn-reg">Register Now</button>
      </div>
    </Hero>
  );
}

export default Header;
