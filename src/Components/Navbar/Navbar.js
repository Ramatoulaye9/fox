import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };
  const goToSearch = () => {
    navigate("/search");
  };

  return (
    <div className="nav">
      <div className="nav-content">
        <div className="nom">FOX</div>
        <ul>
          <li>
            <NavLink to="/" style={({ isActive }) => ({
              color: isActive ? '#0086bd' : '#fff',
              fontWeight: isActive? 'bold': 'normal',})}> Home </NavLink>
          </li>
          <li>
            <NavLink to="/series" style={({ isActive }) => ({
              color: isActive ?'#0086bd' : '#fff',
              fontWeight: isActive? 'bold': 'normal',})}> TV-Séries </NavLink>
          </li>
          <li>
            <NavLink to="/films" style={({ isActive }) => ({
              color: isActive ? '#0086bd' : '#fff',
              fontWeight: isActive? 'bold': 'normal',})}> Films </NavLink>
          </li>
        </ul>
        <div className="login">
          <button onClick={goToLogin}>Connexion</button>
          <IoIosSearch size={"2rem"} onClick={goToSearch} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
