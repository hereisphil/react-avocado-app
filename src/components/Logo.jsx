const Logo = (props) => {
  return (
    <img
      src="/src/images/avocado.svg"
      alt={props.logoAlt}
      style={styles.logo}
    />
  );
};

export default Logo;

const styles = {
  logo: {
    height: "50px",
    cursor: "pointer",
    borderRadius: "50%",
  },
};
