import Button from "./Button";
import AvatarIcon from "../images/man.png";
import MyAvatar from "./MyAvatar";

const Form = (props) => {
  return (
    <form style={styles.formStyles}>
      <div style={styles.postInputs}>
        <input type="text" placeholder="Post Title" style={styles.titleInput} />
        <textarea
          type="text"
          placeholder={`What's on your mind, ${props.userName}?`}
          style={styles.postInput}
        />
      </div>
      <div style={styles.userActions}>
        <MyAvatar img={AvatarIcon} alt="user photo" />
        <Button btnText="Post" />
      </div>
    </form>
  );
};

export default Form;

const styles = {
  formStyles: {
    backgroundColor: "var(--dark-green)",
    borderRadius: "1rem",
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    color: "var(--cream)",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  postInputs: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    justifyContent: "center",
    alignItems: "flex-start",
    flex: "1",
    paddingLeft: "2rem",
    paddingRight: "1rem",
  },
  titleInput: {
    border: "none",
    borderRadius: "0.5rem",
    padding: "0.5rem 0.5rem",
    width: "100%",
    minHeight: "50px",
  },
  postInput: {
    border: "none",
    borderRadius: "0.5rem",
    padding: "0.5rem 0.5rem",
    width: "100%",
    minHeight: "100px",
  },
  userActions: {
    maxWidth: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "2rem",
    paddingLeft: "1rem",
  },
};
