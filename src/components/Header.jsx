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
        <Logo img={avocadoLogo} alt="Avacado.com Logo" />
        <h1 style={styles.brandName}>AVOCADO</h1>
      </div>
      <SearchBar />
      <div style={styles.rightSide}>
        <FaEnvelope style={styles.icons} />
        <FaBell style={styles.icons} />
        <FaGear style={styles.icons} />
        <MyAvatar img={AvatarIcon} alt="Generic male silhouette icon" />
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
  },
  brandName: {
    fontSize: "1.5rem",
    color: "var(--orange)",
    cursor: "pointer",
  },
  rightSide: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  icons: {
    fontSize: "1.5rem",
    cursor: "pointer",
  },
};
