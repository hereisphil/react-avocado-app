import { NavLink } from "react-router";
import { FaBell, FaEnvelope, FaGear } from "react-icons/fa6";
import AvatarIcon from "../images/man.png";
import MyAvatar from "./MyAvatar";
import avocadoLogo from "../images/avocado.svg";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header style={styles.header}>
      <div>
        <NavLink to="/" style={styles.leftSide}>
          <Logo img={avocadoLogo} alt="Avacado.com Logo" />
          <h1 style={styles.brandName}>AVOCADO</h1>
        </NavLink>
      </div>
      <SearchBar />
      <div style={styles.rightSide}>
        <NavLink to="/messages">
          <FaEnvelope style={styles.icons} />
        </NavLink>
        <NavLink to="/notifications">
          <FaBell style={styles.icons} />
        </NavLink>
        <NavLink to="/settings">
          <FaGear style={styles.icons} />
        </NavLink>
        <NavLink to="/settings">
          <MyAvatar img={AvatarIcon} alt="Generic male silhouette icon" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "10px",
    paddingRight: "10px",
    margin: "0.5rem 0",
  },
  leftSide: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    textDecoration: "none",
  },
  brandName: {
    fontSize: "1.5rem",
    color: "var(--orange)",
  },
  rightSide: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  icons: {
    fontSize: "1.5rem",
  },
};
