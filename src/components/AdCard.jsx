const AdCard = (props) => {
  return (
    <div style={styles.card}>
      <h3>{props.title}</h3>
      <img src={props.img} alt={props.alt} style={styles.img} />
      <p>{props.subtitle}</p>
    </div>
  );
};

export default AdCard;

const styles = {
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "var(--olive-green)",
    color: "var(--cream)",
    padding: "1rem",
    marginBottom: "1rem",
    borderRadius: "1rem",
    textAlign: "center",
  },
  img: {
    maxWidth: "100%",
    borderRadius: "0.25rem",
    margin: "0.5rem",
  },
};
