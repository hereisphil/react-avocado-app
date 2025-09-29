// src/pages/Messages.jsx
import { useState } from "react";
import phillip from "../images/man.png";
import samantha from "../images/woman.png";
import jordan from "../images/boy.png";

function Messages() {
  // mock data
  const [inbox] = useState([
    {
      id: 1,
      name: "Samantha Lee",
      avatar: samantha,
      preview: "That tip helped a ton!",
      messages: [
        {
          id: "m1",
          from: "Samantha",
          text: "Hey! Your dashboard looks great.",
        },
        { id: "m2", from: "You", text: "Thanks! Still tweaking colors." },
      ],
    },
    {
      id: 2,
      name: "Jordan Alvarez",
      avatar: jordan,
      preview: "Fixed the bug 😅",
      messages: [
        { id: "m1", from: "Jordan", text: "Fixed the state bug finally 😅" },
        { id: "m2", from: "You", text: "Nice! What was it?" },
      ],
    },
    {
      id: 3,
      name: "Phillip Cantu",
      avatar: phillip,
      preview: "Shipping v0.1!",
      messages: [
        { id: "m1", from: "You", text: "Shipping v0.1 of Avocado App!" },
        { id: "m2", from: "Phillip", text: "🔥 Awesome—keep going!" },
      ],
    },
  ]);

  const [activeId, setActiveId] = useState(inbox[0].id);
  const active = inbox.find((person) => person.id === activeId);

  return (
    <>
      <h2>Messages</h2>
      <hr />
      <section style={styles.wrap}>
        {/* Inbox */}
        <aside style={styles.inbox}>
          <h3 style={styles.h3}>Inbox</h3>
          <ul style={styles.list}>
            {inbox.map((person) => (
              <li
                key={person.id}
                onClick={() => setActiveId(person.id)}
                style={{
                  ...styles.item,
                  ...(activeId === person.id ? styles.itemActive : {}),
                }}
              >
                <img src={person.avatar} alt="" style={styles.avatarSm} />
                <div>
                  <div style={styles.name}>{person.name}</div>
                  <div style={styles.preview}>{person.preview}</div>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {/* message thread */}
        <main style={styles.thread}>
          <header style={styles.header}>
            <img src={active.avatar} alt="" style={styles.avatarMd} />
            <div>
              <h3 style={{ margin: 0 }}>{active.name}</h3>
              <small style={{ color: "#666" }}>Direct message</small>
            </div>
          </header>

          <div style={styles.messages}>
            {active.messages.map((message) => {
              const mine = message.from === "You";
              return (
                <div
                  key={message.id}
                  style={{
                    ...styles.row,
                    justifyContent: mine ? "flex-end" : "flex-start",
                  }}
                >
                  {!mine && (
                    <img src={active.avatar} alt="" style={styles.avatarXs} />
                  )}
                  <div
                    style={{
                      ...styles.bubble,
                      background: mine
                        ? "rgba(221,161,94,0.15)"
                        : "rgba(96,108,56,0.12)",
                      borderColor: mine
                        ? "rgba(221,161,94,0.45)"
                        : "rgba(96,108,56,0.35)",
                    }}
                  >
                    {message.text}
                  </div>
                </div>
              );
            })}
          </div>

          {/* non-functional form*/}
          <form style={styles.form}>
            <input
              type="text"
              placeholder="Type a message… (demo)"
              style={styles.input}
              readOnly
            />
            <button type="button" style={styles.btn} disabled>
              Send
            </button>
          </form>
        </main>
      </section>
    </>
  );
}

export default Messages;

/* -------------------- simple CSS-in-JS -------------------- */
const styles = {
  wrap: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    gap: "1rem",
  },
  h3: { margin: "0 0 0.5rem 0", color: "var(--dark-green)" },

  inbox: {
    background: "#fff",
    border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: "8px",
    padding: "0.5rem",
  },
  list: { listStyle: "none", margin: 0, padding: 0 },
  item: {
    display: "flex",
    gap: "0.6rem",
    padding: "0.5rem",
    borderRadius: "6px",
    cursor: "pointer",
  },
  itemActive: {
    background: "rgba(96,108,56,0.08)",
    outline: "1px solid rgba(96,108,56,0.25)",
  },
  name: { fontWeight: 600, color: "var(--dark-green)" },
  preview: { fontSize: "0.85rem", color: "#6b6b6b" },
  avatarSm: { width: 32, height: 32, borderRadius: "50%" },

  thread: {
    background: "#fff",
    border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: "8px",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    minHeight: 420,
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.75rem",
    borderBottom: "1px solid rgba(0,0,0,0.08)",
  },
  avatarMd: { width: 42, height: 42, borderRadius: "50%" },
  avatarXs: {
    width: 26,
    height: 26,
    borderRadius: "50%",
    marginRight: "0.4rem",
  },

  messages: {
    padding: "0.75rem",
    display: "grid",
    gap: "0.5rem",
  },
  row: { display: "flex", alignItems: "flex-start", gap: "0.4rem" },
  bubble: {
    maxWidth: "60ch",
    padding: "0.5rem 0.65rem",
    borderRadius: "10px",
    border: "1px solid",
    color: "var(--dark-green)",
    fontSize: "0.95rem",
  },

  form: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: "0.5rem",
    padding: "0.6rem",
    borderTop: "1px solid rgba(0,0,0,0.08)",
    background: "rgba(254,250,224,0.65)",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  },
  input: {
    border: "1px solid rgba(0,0,0,0.15)",
    borderRadius: "6px",
    padding: "0.55rem 0.65rem",
    outline: "none",
    background: "#fff",
  },
  btn: {
    border: "none",
    borderRadius: "6px",
    padding: "0 0.8rem",
    fontWeight: 700,
    color: "#fff",
    background: "var(--soft-orange)",
    opacity: 0.6, // looks disabled (demo)
  },
};
