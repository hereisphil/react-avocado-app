import { useState, useEffect } from "react";

function Settings() {
  const randomUsaUserUrl = "https://randomuser.me/api/?nat=us";
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(randomUsaUserUrl);
        const data = await response.json();
        const [userData] = data.results;
        console.log("Fetched userData as an object:", userData);
        setUser(userData);
      } catch (error) {
        console.log("There was an error: ", error);
        // fallback object
        const fallbackUser = {
          name: { title: "Mr", first: "Andy", last: "Robertson" },
          location: {
            street: { number: 5393, name: "Lakeview St" },
            city: "Anchorage",
            state: "New Jersey",
            postcode: 32316,
          },
          email: "andy.robertson@example.com",
          phone: "(794) 983-1226",
          picture: {
            large: "https://randomuser.me/api/portraits/men/30.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/30.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/30.jpg",
          },
          login: {
            username: "bigduck445",
            password: "edge",
          },
        };
        //  will use a fallback randomuser incase API fetch fails
        setUser(fallbackUser);
      }
    }
    fetchUser();
  }, []);

  return (
    <>
      <h2>Settings</h2>
      <hr />
      <div style={styles.page}>
        {/* Profile header card */}
        <section style={styles.headerCard}>
          <img
            src={user?.picture?.large || "https://placehold.co/150x150"}
            alt={`${user?.name?.title || ""}. ${user?.name?.first || ""} ${
              user?.name?.last || ""
            }'s profile photo`}
            style={styles.avatar}
          />
          <div style={styles.headerText}>
            <h3 style={styles.welcome}>
              {`Welcome ${user?.name?.title || ""}. ${
                user?.name?.first || ""
              } ${user?.name?.last || ""}!`}
            </h3>
            <p style={styles.subtle}>Manage your profile details</p>
          </div>
        </section>

        {/* Details form card */}
        <section style={styles.formCard}>
          <form style={styles.formGrid}>
            <div style={styles.field}>
              <label style={styles.label}>Title</label>
              <input
                style={styles.input}
                value={user?.name?.title || ""}
                readOnly
              />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>First Name</label>
              <input
                style={styles.input}
                value={user?.name?.first || ""}
                readOnly
              />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Last Name</label>
              <input
                style={styles.input}
                value={user?.name?.last || ""}
                readOnly
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Address</label>
              <input
                style={styles.input}
                value={`${user?.location?.street?.number || ""} ${
                  user?.location?.street?.name || ""
                }`}
                readOnly
              />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>City</label>
              <input
                style={styles.input}
                value={user?.location?.city || ""}
                readOnly
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>State</label>
              <input
                style={styles.input}
                value={user?.location?.state || ""}
                readOnly
              />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Zip</label>
              <input
                style={styles.input}
                type="number"
                value={user?.location?.postcode || ""}
                readOnly
              />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Phone</label>
              <input style={styles.input} value={user?.phone || ""} readOnly />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Email</label>
              <input style={styles.input} value={user?.email || ""} readOnly />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Username</label>
              <input
                style={styles.input}
                value={user?.login?.username || ""}
                readOnly
              />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Password</label>
              <input
                style={styles.input}
                value={user?.login?.password || ""}
                readOnly
              />
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default Settings;

const cardShadow = "0 10px 20px rgba(0,0,0,0.2)";
const radius = "16px";

const styles = {
  // implemented tricks learned from https://www.youtube.com/watch?v=2IV08sP9m3U
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.25rem",
  },

  /* Header/Profile card */
  headerCard: {
    width: "min(100%, 980px)",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem 1.25rem",
    borderRadius: radius,
    boxShadow: cardShadow,
    border: "1px solid #eee",
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid var(--cream)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  },
  headerText: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  welcome: {
    margin: 0,
    color: "var(--soft-orange)",
    fontWeight: 700,
  },
  subtle: {
    margin: 0,
    color: "rgba(0,0,0,0.55)",
    fontSize: "0.9rem",
  },

  /* Form card */
  formCard: {
    width: "min(100%, 980px)",
    background: "#fff",
    padding: "1.25rem",
    borderRadius: radius,
    boxShadow: cardShadow,
    border: "1px solid #eee",
  },

  formGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem 1.25rem",
    justifyContent: "flex-start",
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
    flex: "1 1 240px",
    minWidth: "220px",
    maxWidth: "320px",
  },

  label: {
    fontWeight: 700,
    color: "var(--olive-green)",
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
  },
};
