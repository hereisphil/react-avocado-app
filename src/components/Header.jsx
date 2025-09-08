import { FaBell, FaEnvelope, FaGear } from "react-icons/fa6";
import AvatarIcon from "../images/man.png";
import MyAvatar from "./MyAvatar";
import avocadoLogo from "../images/avocado.svg";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.leftSide}>
        <a href="#">
          <Logo img={avocadoLogo} alt="Avacado.com Logo" />
        </a>

        <a href="#" style={styles.brandLink}>
          <h1 style={styles.brandName}>AVOCADO</h1>
        </a>
      </div>
      <SearchBar />
      <div style={styles.rightSide}>
        <a href="#" style={styles.icons}>
          <FaEnvelope />
        </a>
        <a href="#" style={styles.icons}>
          <FaBell />
        </a>
        <a href="#" style={styles.icons}>
          <FaGear />
        </a>
        <a href="#">
          <MyAvatar img={AvatarIcon} alt="Generic male silhouette icon" />
        </a>
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
    marginTop: "0.5rem",
  },
  leftSide: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  brandLink: {
    color: "var(--orange)",
  },
  brandName: {
    fontSize: "1.5rem",
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
