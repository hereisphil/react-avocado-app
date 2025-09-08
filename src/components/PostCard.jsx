import AvatarIcon from "../images/man.png";
import MyAvatar from "./MyAvatar";
import { FaPen, FaTrashCan } from "react-icons/fa6";

const PostCard = (props) => {
  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <MyAvatar img={AvatarIcon} alt="user icon" />
        <p style={styles.userName}>
          <em>{props.userName}</em>
        </p>
        <FaPen style={styles.icon} />
        <FaTrashCan style={styles.icon} />
      </div>
      <div style={styles.cardContent}>
        <h3 style={styles.title}>{props.title}</h3>
        <p style={styles.caption}>{props.caption}</p>
      </div>
    </div>
  );
};

export default PostCard;

const styles = {
  card: {
    backgroundColor: "var(--olive-green)",
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
  },
  cardContent: {
    padding: "1rem",
    width: "80%",
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
