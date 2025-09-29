import { Link } from "react-router";
function Watch() {
  return (
    <>
      <h2>Watch</h2>
      <hr />
      <h3 style={styles.comingSoon}>Coming Soon</h3>
      <div style={styles.youtube}>
        {/* <iframe
          src=""
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          width="1920"
          height="1080"
          loading="lazy"
          style={styles.iframe}
        ></iframe> */}
      </div>
      <p style={styles.link}>
        {/* <Link to="" target="_blank">
          👉 YouTube Video
        </Link> */}
      </p>
    </>
  );
}

export default Watch;

const styles = {
  link: {
    margin: "0 auto",
    fontWeight: "bold",
    fontSize: "1.25rem",
  },
  // Stole some responsive styles from:
  // https://getbutterfly.com/the-ultimate-youtube-video-embed-setup/
  youtube: {
    position: "relative",
    width: "100%",
    paddingBottom: "56.25%",
  },
  iframe: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    border: "0",
    animation: "fadeIn 2.5s",
  },
  comingSoon: {
    fontSize: "2rem",
    margin: "0 auto",
    padding: "1rem",
    color: "red",
  },
};
