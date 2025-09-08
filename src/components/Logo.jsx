const Logo = (props) => {
  return <img src={props.img} alt={props.alt} style={styles.logo} />;
};

export default Logo;

const styles = {
  logo: {
    height: "50px",
    cursor: "pointer",
    borderRadius: "50%",
  },
};
