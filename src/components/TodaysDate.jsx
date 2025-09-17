const TodaysDate = () => {
  const date = new Date();
  const fullDate = date.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return <span style={styles.date}>{fullDate}</span>;
};

export default TodaysDate;

const styles = {
  date: {
    textAlign: "center",
    fontSize: "0.75rem",
    fontWeight: "bold",
    display: "block",
  },
};
