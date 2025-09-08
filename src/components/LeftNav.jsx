const LeftNav = () => {
  return (
    <nav style={styles.leftNav}>
      <ul style={styles.navItems}>
        <li>
          <a>News Feed</a>
        </li>
        <li>
          <a>Messages</a>
        </li>
        <li>
          <a>Watch</a>
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
