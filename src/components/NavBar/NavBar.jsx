import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <img
          width={150}
          src="public\img\tocloset_logo..webp"
          alt=""
        />
      </Link>

      <ul className="categories">
        <Link to="/categoria/hombre" className="category">
          <p>Hombre</p>
          <div className="img-category">
            <img
              src="public\img\men.webp"
              alt=""
            />
          </div>
        </Link>

        <Link to="/categoria/mujer" className="category">
          <p>Mujeres</p>
          <div className="img-category">
            <img
              src="public\img\Woman.png"
              alt=""
            />
          </div>
        </Link>

        <Link to="/categoria/kids" className="category">
          <p>Kids</p>
          <div className="img-category">
            <img
              src="public\img\Children.webp"
              alt=""
            />
          </div>
        </Link>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
