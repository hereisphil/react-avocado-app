import { useState, useEffect } from "react";

function Notifications() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <h2>Notifications</h2>
      <hr />
      <div style={styles.centeredContent}>
        {loading ? (
          <p style={styles.text}>Loading notifications...</p>
        ) : (
          <div style={styles.card}>
            <p style={styles.text}>No new notifications</p>
            <a href="#" style={styles.link}>
              View past notifications
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Notifications;

const styles = {
  centeredContent: {
    margin: "0 auto",
    textAlign: "center",
    width: "50%",
  },
  card: {
    background: "#fff",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    maxWidth: "400px",
  },
  text: {
    margin: 0,
    color: "var(--dark-green)",
    fontWeight: "bold",
  },
  link: {
    display: "block",
    marginTop: "0.5rem",
    color: "var(--soft-orange)",
    textDecoration: "underline",
    cursor: "pointer",
  },
};
