const MyAvatar = (props) => {
  return <img src={props.img} alt={props.alt} style={styles.avatar} />;
};

export default MyAvatar;

const styles = {
  avatar: {
    height: "50px",
    cursor: "pointer",
    borderRadius: "50%",
  },
};
