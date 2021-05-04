// importing react
import { NavLink } from "react-router-dom";
// importing css
import "./header.scss";

export default function Header() {
  return (
    <header>
      <div className="titleContainer">
        <NavLink exact to="/">
          <p className="title">Project 1</p>
        </NavLink>
      </div>
      <div className="navlinks">
        <ul>
          <NavLink exact to="/">
            <li className="listItem">Home</li>
          </NavLink>
          <NavLink to="/about">
            <li className="listItem">About</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}
