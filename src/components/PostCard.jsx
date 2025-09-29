import MyAvatar from "./MyAvatar";
import { FaTrashCan, FaPen } from "react-icons/fa6";
import anonymousUser from "../images/user.png";
import TodaysDate from "./TodaysDate";

const PostCard = (props) => {
  return (
    <article style={{ ...styles.card, backgroundColor: props.color }}>
      <div style={styles.cardHeader}>
        <MyAvatar
          img={props.val.pAvatar ? props.val.pAvatar : anonymousUser}
          alt={
            props.val.pAlt
              ? props.val.pAlt
              : "generic anonymous user profile image"
          }
        />
        <p style={styles.userName}>
          <em>
            {props.val.pAuthor ? props.val.pAuthor : "Anonymous"}
            <br />
            {props.val.pDate ? props.val.pDate : <TodaysDate />}
          </em>
        </p>
        <FaPen style={styles.icon} onClick={props.editPost} />
        <FaTrashCan style={styles.icon} onClick={props.delete} />
      </div>
      {props.edit ? (
        <form style={styles.cardContent} onSubmit={props.handleSubmit}>
          <label style={styles.label}>
            Edit Title:
            <input
              type="text"
              style={styles.input}
              defaultValue={props.val.pTitle}
              name="pTitle"
              autoFocus
            ></input>
          </label>
          <label style={styles.label}>
            Edit Content:
            <textarea
              type="text"
              style={styles.input}
              defaultValue={props.val.pContent}
              name="pContent"
            />
          </label>
          <button
            type="button"
            style={styles.button}
            onClick={props.handleCancel}
          >
            Cancel
          </button>
          {/* submit button doesn't need onClick because of form submit */}
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      ) : (
        <div style={styles.cardContent}>
          <h3 style={styles.title}>{props.val.pTitle}</h3>
          <p style={styles.caption}>{props.val.pContent}</p>
        </div>
      )}
    </article>
  );
};

export default PostCard;

const styles = {
  card: {
    borderRadius: "1rem",
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    color: "var(--cream)",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    border: "1px solid #eee",
  },
  cardHeader: {
    paddingLeft: "1rem",
  },
  userName: {
    color: "black",
    fontSize: "0.75rem",
    fontWeight: "bold",
  },
  icon: {
    cursor: "pointer",
    color: "var(--soft-orange)",
    margin: "0.25rem 0.5rem",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },
  cardContent: {
    padding: "1rem",
    width: "80%",
  },
  label: {
    fontWeight: 700,
    fontSize: "0.92rem",
  },
  input: {
    width: "100%",
    border: "1px solid #e7e7e7",
    borderRadius: "10px",
    padding: "0.65rem 0.9rem",
    color: "var(--dark-green)",
    background: "#fff",
    boxShadow: "inset 0 1px 2px rgba(0,0,0,0.03)",
    outline: "none",
    fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  },

  button: {
    padding: "0.5rem 0.75rem",
    border: "none",
    borderRadius: "0.25rem",
    backgroundColor: "var(--orange)",
    color: "var(--cream)",
    fontWeight: "bold",
    margin: "1rem 0.5rem",
    cursor: "pointer",
  },
  title: {
    fontSize: "1.5rem",
    color: "var(--dark-green)",
    paddingBottom: "0.5rem",
    borderBottom: "2px solid rgba(221, 161, 94,0.5)",
  },
  caption: {
    padding: "1rem 1rem 0px 1rem",
  },
};
