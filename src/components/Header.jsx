import "../index.css";
import { Link } from "react-router-dom";
import { Links } from "../data/links";

const Header = () => {
  return (
    <div>
      <ul className="flex flex-col gap-2 ml-4  text-md md:text-2xl md:gap-4 ">
        {Links.map((link) => {
          return (
            <Link to={`/${link.to}`} className="links nav-links">
              {link.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
