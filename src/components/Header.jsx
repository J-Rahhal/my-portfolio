import "../index.css";

const Header = () => {
  return (
    <div>
      <ul className="flex flex-col gap-2 ml-4  text-md md:text-2xl md:gap-4 ">
        <li className="links">
          <a href="#home">Home</a>
        </li>
        <li className="links">
          <a href="#about">About Me</a>
        </li>
        <li className="links">
          <a href="#projects"> Projects</a>
        </li>
        <li className="links">
          <a href="#projects">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
