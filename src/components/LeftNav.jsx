import { NavLink } from "react-router";

const LeftNav = () => {
  return (
    <nav style={styles.leftNav}>
      <ul style={styles.navItems}>
        <li>
          <NavLink to="/newsfeed" style={styles.links}>
            Newsfeed
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" style={styles.links}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/messages" style={styles.links}>
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink to="/watch" style={styles.links}>
            Watch
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default LeftNav;

const styles = {
  leftNav: {
    padding: "1.5rem 0 0 1rem",
    fontWeight: "bold",
    width: "200px",
    fontSize: "1.25rem",
  },
  navItems: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
};
